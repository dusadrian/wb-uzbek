import * as path from "path";
import * as DuckDB from "duckdb";
import * as DI from "../../src/interfaces/database";
import { save as instrumentSave, get as instrumentGet, getExisting, cpisList, deleteCPIS, cibsList, deleteCIBS, csrList, deleteStaff, ftchList, deleteFTCH, pfqList, deletePFQ, eefList, deleteEEF, yplcsList, deleteYPLCS, tqypList, deleteTQYP } from "./instruments";


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
    getInstitutions: async () => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {
            db.all(`SELECT * FROM institutions`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.Institution[]);
            });
        });
        return await connection;
    },
    getINSON: async () => {
        const connection = new Promise<Array<DI.INSON>>((resolve) => {
            db.all(`SELECT * FROM inson`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.INSON[]);
            });
        });
        return await connection;
    },
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

    getUserInstitution: async (institution_code: string) => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {
            db.all(`SELECT * FROM institutions WHERE code = '${institution_code}'`, (error, result) => {
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
            db.run(`
                UPDATE institutions SET
                    code = '${institution.code}',
                    name = '${institution.name}',
                    type = '${institution.type}',
                    address = '${institution.address}',
                    region = '${institution.region}',
                    district = '${institution.district}',
                    capacity = '${institution.capacity}',
                    children = '${institution.children}'
                    leavers = '${institution.leavers}'
                    employees = '${institution.employees}',
                    inson = '${institution.inson}',
                WHERE id = '${institution.id}'
            `, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    getInstitutionUsers: async (institution_code: string) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            // db.all(`SELECT * FROM users WHERE institution_code = '${institution_id}' AND id != '${userId}'`, (error, result) => {
            // TODO -- testing only
            db.all(`SELECT * FROM users WHERE institution_code = '${institution_code}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },
    // TODO -- this does not work anymore
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addUser: async (user: any) => {
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
            db.run(`
                UPDATE users SET
                    username = '${user.username}',
                    password = '${user.password}',
                    institution_code = '${user.institution_code}',
                    institution_name = '${user.institution_name}',
                    name = '${user.name}',
                    patronymics = '${user.patronymics}',
                    surname = '${user.surname}',
                    job_title = '${user.job_title}',
                    profession = '${user.profession}',
                    phone = '${user.phone}',
                    email = '${user.email}',
                    region_code = '${user.region_code}',
                    role_code = '${user.role_code}',
                    service_type_code = '${user.service_type_code}'
                WHERE id = '${user.id}'
            `, (error) => {
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

    filledInstruments: async (region?: string, typeOfInstitution?: string) => {
        let where = '';
        if (region || typeOfInstitution) {
            where = 'WHERE ';
        }
        if (region) {
            where += `region_code = '${region}'`;
        }
        if (region && typeOfInstitution) {
            where += ' AND ';
        }
        if (typeOfInstitution) {
            where += `institution_type = '${typeOfInstitution}'`;
        }

        const i1 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_cpis ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument1 = await i1;
        const i2 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_cibs ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument2 = await i2;
        const i3 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_csr ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument3 = await i3;
        const i4 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_qmr ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument4 = await i4;
        const i5a = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_tqyp ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument5a = await i5a;
        const i5 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_yplcs ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument5 = await i5;
        const i6 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_dsee ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument6 = await i6;
        const i7 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_ftch ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument7 = await i7;
        const i8 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_pfq ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument8 = await i8;

        return {
            instrument1,
            instrument2,
            instrument3,
            instrument4,
            instrument5a,
            instrument5,
            instrument6,
            instrument7,
            instrument8
        };
    },

    async getDataForDownload(table: string) {
        const connection = new Promise<DI.DataExportInterface[]>((resolve) => {
            db.all(`SELECT * FROM instrument_${table} LEFT JOIN values_${table} ON values_${table}.instrument_id = instrument_${table}.id WHERE status = 'partial'`, (error, result) => {
                if (error) {
                    console.log("===== Error getDataForDownload =====");
                    console.log(error);
                }
                resolve(result as DI.DataExportInterface[]);
            });
        });
        return await connection;
    },

    getInstrumentIdFromUUId: async (table: string, uuid: string) => {
        const connection = new Promise<DI.DataExportInterface[]>((resolve) => {
            db.all(`SELECT * FROM instrument_${table} WHERE uuid = '${uuid}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.DataExportInterface[]);
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
    cibsList,
    deleteCIBS,
    csrList,
    deleteStaff,
    ftchList,
    deleteFTCH,
    pfqList,
    deletePFQ,
    eefList,
    deleteEEF,
    yplcsList,
    deleteYPLCS,
    tqypList,
    deleteTQYP,
}
