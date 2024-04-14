import * as path from "path";
import * as DuckDB from "duckdb";
import * as DI from "../../src/interfaces/database";
import { save as instrumentSave, get as instrumentGet, getExisting, cpisList, deleteCPIS, csrList, deleteStaff, ftchList, deleteFTCH, pfqList, deletePFQ } from "./instruments";


const duckdbOptions: {
    access_mode: 'READ_WRITE' | 'READ_ONLY',
    max_memory?: string
} = {
    'access_mode': 'READ_WRITE',
    'max_memory': '4096MB',
};


let dbDir = path.resolve("./src/database/");

if (process.env.NODE_ENV == 'production') {
    dbDir = path.join(path.resolve(__dirname), '../../../');
    duckdbOptions['access_mode'] = 'READ_WRITE';
    delete duckdbOptions.max_memory;
}

const dbFile = path.join(dbDir, "uzbek.duckdb");

// TODO function to export (transposed) tables into parquet files for R:
// `
//  COPY (PIVOT values_qmr ON variable USING MAX(value) GROUP BY instrument_id)
//  TO '${path.join(dbDir, "qmr.parquet")}'
//  (FORMAT 'parquet')
// `

export const db = new DuckDB.Database(dbFile, duckdbOptions,
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
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },
    getUserData: async (userId: number) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            db.all(`SELECT * FROM users WHERE id = '${userId}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },

    getUserInstitution: async (institution_id: number) => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {
            db.all(`SELECT * FROM institutions WHERE id = '${institution_id}'`, (error, result) => {
                if (error) {
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
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    getInstitutionUsers: async (institution_id: number, userId: number) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            // db.all(`SELECT * FROM users WHERE institution_id = '${institution_id}' AND id != '${userId}'`, (error, result) => {
            // TODO -- testing only
            db.all(`SELECT * FROM users WHERE institution_id = '${institution_id}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },
    addUser: async (user: DI.User) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`INSERT INTO users (user_type, username, password, institution_id, first_name, patronymics, last_name, position, profession, phone, email) VALUES ('${user.user_type}', '${user.username}', '${user.password}', '${user.institution_id}', '${user.first_name}', '${user.patronymics}', '${user.last_name}', '${user.position}', '${user.profession}', '${user.phone}', '${user.email}')`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    getUser: async (id: string) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            db.all(`SELECT * FROM users WHERE id = '${id}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });

        return await connection;
    },
    updateUser: async (user: DI.User) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE users SET username = '${user.username}', password = '${user.password}', first_name = '${user.first_name}', patronymics = '${user.patronymics}', last_name = '${user.last_name}', position = '${user.position}', profession = '${user.profession}', phone = '${user.phone}', email = '${user.email}' WHERE id = '${user.id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    deleteUser: async (id: string) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`DELETE FROM users WHERE id = '${id}' AND user_type = 'localCollector'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },

    // Instruments
    instrumentSave,
    instrumentGet,
    getExisting,
    cpisList,
    deleteCPIS,
    csrList,
    deleteStaff,
    ftchList,
    deleteFTCH,
    pfqList,
    deletePFQ,
}
