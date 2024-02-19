import * as path from "path";
import * as DuckDB from "duckdb";
import * as DI from "../../src/interfaces/database";

let dbFile = '';
if (process.env.NODE_ENV == 'development') {
    dbFile = path.join(path.resolve('./src/database/uzbek.duckdb'));
} else {
    dbFile = path.join(path.resolve(__dirname), '../../../') + 'uzbek.duckdb';
}

console.log(dbFile);


const db = new DuckDB.Database(dbFile, {
    "access_mode": "READ_WRITE",
    // "max_memory": "1024MB",
    "threads": "16"
},
    (error) => {
        if (error) {
            console.log('DB failed to open');
            console.log(error);
        }
    }
);

export const database = {
    checkUser: async (username: string, password: string) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            db.all(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`, (error, result) => {
                if(error){
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },

    getUserInstitution: async (institutionId: number) => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {
            db.all(`SELECT * FROM institutions WHERE id = '${institutionId}'`, (error, result) => {
                if(error){
                    console.log(error);
                }
                resolve(result as DI.Institution[]);
            });
        });
        return await connection;
    },
    saveInstitutionDetails: async (institution: DI.Institution) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE institutions SET name = '${institution.name}', code = '${institution.code}', address = '${institution.address}', region = '${institution.region}', district = '${institution.district}', type = '${institution.type}', staffCount = '${institution.staffCount}', childrenCount = '${institution.childrenCount}', youngAdultCount = '${institution.youngAdultCount}', atuCode = '${institution.atuCode}' WHERE id = '${institution.id}'`, (error) => {
                if(error){
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    getInstitutionUsers: async (institutionId: number, userId: number) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            db.all(`SELECT * FROM users WHERE institutionId = '${institutionId}' AND id != '${userId}'`, (error, result) => {
                if(error){
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    }
}
