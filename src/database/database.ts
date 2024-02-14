import * as path from "path";
import * as DuckDB from "duckdb";
import * as DI from "../../src/interfaces/database";

let dbFile = '';
if (process.env.NODE_ENV == 'development') {
    dbFile = path.join(path.resolve('./src/database/uzbek'));
} else {
    dbFile = path.join(path.resolve(__dirname), '../../../') + 'uzbek';
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
    }
}
