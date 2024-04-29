/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as zlib from 'zlib';
import { Transform } from 'stream';

class AppendInitVect extends Transform {
    initVect: any;
    appended: boolean;
    constructor(initVect: any, opts?: any) {
        super(opts);
        this.initVect = initVect;
        this.appended = false;
    }

    _transform(chunk: any, encoding: string, cb: () => void) {
        if (!this.appended) {
            this.push(this.initVect);
            this.appended = true;
        }
        this.push(chunk);
        cb();
    }
}

export const crypt = {

    key: crypto.scryptSync('5WvvWX\/G3"T:ybSn@5z-m1J', 'salt', 24),

    // cale fisier pentru criptat .json
    encryptFile: function (cale: string) {

        const caleNoua = cale + '.dat';

        const input = fs.createReadStream(cale);
        const output = fs.createWriteStream(caleNoua);
        // zip
        const zip = zlib.createGzip();

        const iv = crypto.randomBytes(16);

        const cipher = crypto.createCipheriv('aes-192-cbc', crypt.key, iv);
        const appendInitVect = new AppendInitVect(iv);

        input
            .pipe(zip)
            .pipe(cipher)
            .pipe(appendInitVect)
            .pipe(output)
            .on('finish', () => {
                // remove the json file
                fs.unlinkSync(cale);
            })
    },

    // cale fisier criptat .dat
    decryptFile: function (cale: string) {
        return new Promise((resolve) => {
            // First, create a stream which will read the init vect from the file.
            // const readIv = fs.createReadStream(cale, { end: 15 });
            const readIv = fs.createReadStream(cale, { end: 15 });

            // Then, wait to get the initVect.
            let initVect: any;
            readIv.on('data', (chunk) => {
                initVect = chunk;
            });

            // Once we've got the initialization vector, we can decrypt
            // the file.
            readIv.on('close', () => {

                // start decrypting the cipher text…
                const decipher = crypto.createDecipheriv('aes-192-cbc', crypt.key, initVect);

                // unzip content
                const unzip = zlib.createGunzip();

                const outDecryptedFile = cale.slice(0, -4) + '.json';
                const inputEnc = fs.createReadStream(cale, { start: 16 });
                const outputDec = fs.createWriteStream(outDecryptedFile);

                inputEnc.pipe(decipher).pipe(unzip).pipe(outputDec);

                outputDec.on('close', () => {
                    resolve(true);
                });
            });
        });
    },
    decryptFiles: function (cale: string) {
        return new Promise((resolve) => {
            // First, create a stream which will read the init vect from the file.
            const readIv = fs.createReadStream(cale, { end: 15 });

            // Then, wait to get the initVect.
            let initVect: any;
            readIv.on('data', (chunk) => {
                initVect = chunk;
            });

            // Once we've got the initialization vector, we can decrypt
            // the file.
            readIv.on('close', () => {

                // start decrypting the cipher text…
                const decipher = crypto.createDecipheriv('aes-192-cbc', crypt.key, initVect);

                // unzip content
                const unzip = zlib.createGunzip();

                // const outDecryptedFile = cale.slice(0, -4) + '.json';
                const inputEnc = fs.createReadStream(cale, { start: 16 });
                // const outputDec = fs.createWriteStream(outDecryptedFile);

                let stringData = '';
                // inputEnc.pipe(decipher).pipe(unzip).pipe(outputDec);
                inputEnc.pipe(decipher).pipe(unzip).on('data', (chunk) => {
                    stringData += chunk.toString('utf8');
                })

                unzip.on('end', () => {
                    resolve(stringData);
                });
            });
        });
    }
};