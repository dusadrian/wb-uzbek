import * as path from "path";
import * as DuckDB from "duckdb";
import * as DI from "../interfaces/database";
import { save as instrumentSave, get as instrumentGet, getExisting, cpisList, deleteCPIS, cibsList, deleteCIBS, csrList, deleteStaff, ftchList, deleteFTCH, pfqList, deletePFQ, eefList, deleteEEF, yplcsList, deleteYPLCS, tqypList, deleteTQYP } from "./instruments";
import constant from '../libraries/constants'

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

    getUserInstitution: async (institution_code: string, service_type_code: string) => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {

            let sql = `SELECT * FROM institutions WHERE code = '${institution_code}'`;
            if (constant.INSON.includes(service_type_code)) {
                sql = `SELECT * FROM inson WHERE code = '${institution_code}'`;
            }

            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.Institution[]);
            });
        });
        return await connection;
    },
    getInstitutionDetails: async (code: string, service_type_code: string) => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {
            let sql = `SELECT * FROM institutions WHERE code = '${code}'`;
            if (service_type_code == '9') {
                sql = `SELECT * FROM inson WHERE code = '${code}'`;
            }

            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.Institution[]);
            });
        });
        return await connection;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateService: async (data: DI.UpdateServiceObjInterface) => {
        const connection = new Promise<boolean>((resolve) => {

            db.run(`UPDATE institutions SET children = '${data.children}', leavers = '${data.leavers}', employees = '${data.employees}' WHERE id = '${data.institution_id}' AND uuid = '${data.institutionUUID}';`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    updateInson: async (data: DI.UpdateInsonObjInterface) => {

        if (data.services.length > 0) {
            for (const service of data.services) {
                const connection = new Promise<boolean>((resolve) => {
                    db.run(`UPDATE institutions SET children = '${service.children}', leavers = '${service.leavers}' WHERE id = '${service.id}' AND uuid = '${service.uuid}'`, (error) => {
                        if (error) {
                            console.log(error);
                        }
                        resolve(true);
                    });
                });
                await connection;
            }
        }

        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE inson SET pf = '${data.pf}', children_fth = '${data.children_fth}', leavers_fth = '${data.leavers_fth}' WHERE id = '${data.institution_id}' AND uuid = '${data.institutionUUID}'`, (error) => {
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

    checkAuthCode: async (institution_code: string, auth_code: string) => {
        const connection = new Promise<Array<DI.AuthCode>>((resolve) => {
            db.all(`SELECT * FROM auth_codes WHERE code = '${auth_code}' AND institution_code = '${institution_code}' AND used = false`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.AuthCode[]);
            });
        });
        return await connection;
    },
    updateAuthCode: async (institution_code: string, auth_code: string) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE auth_codes SET used = true WHERE code = '${auth_code}' AND institution_code = '${institution_code}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },

    // TODO -- this does not work anymore
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addUser: async (user: any) => {
        const connection = new Promise<boolean>((resolve) => {
            console.log('aici');

            db.run(`INSERT INTO users (username, password, institution_code, institution_name, name, patronymics, surname, job_title, profession, phone, email, region_code, role_code, service_type_code) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                user.username,
                user.password,
                user.institution_code,
                user.institution_name,
                user.name,
                user.patronymics,
                user.surname,
                user.job_title,
                user.profession,
                user.phone,
                user.email,
                user.region_code,
                user.role_code,
                user.service_type_code,
                (error) => {
                    if (error) {
                        console.log(error);
                        resolve(false);
                        return;
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
                    name = ?,
                    patronymics = ?,
                    surname = ?,
                    job_title = ?,
                    profession = ?,
                    phone = ?,
                    email = ?
                WHERE id = ?
            `,
                user.name,
                user.patronymics,
                user.surname,
                user.job_title,
                user.profession,
                user.phone,
                user.email,
                user.id,
                (error) => {
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
            db.run(`DELETE FROM users WHERE id = '${id}' AND role_code in (2,3,4)`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },

    filledInstruments: async (role_code: string, user_uuid: string, institution_code: string, region?: string, typeOfInstitution?: string) => {
        let where = '';

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST) {
            where += ` WHERE user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            where += ` WHERE institution_code = '${institution_code}'`;
        } else if (region || typeOfInstitution) {
            where += ` WHERE `;
        }

        if (region) {
            where += `region_code = '${region}'`;
        }

        if (region && typeOfInstitution) {
            where += ` AND `;
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

    async getDataForDownload(table: string, role_code: string, user_uuid: string, institution_code: string) {
        const connection = new Promise<DI.DataExportInterface[]>((resolve) => {
            // only completed instruments

            let where = ''; // only user's data
            if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST) {
                where += ` AND user_uuid = '${user_uuid}'`;
            } else if (role_code === constant.ROLE_LOCAL) {
                where += ` AND institution_code = '${institution_code}'`;
            }

            db.all(`SELECT * FROM instrument_${table} LEFT JOIN values_${table} ON values_${table}.instrument_id = instrument_${table}.id WHERE status = 'completed' ${where}`, (error, result) => {
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
            db.all(`SELECT id FROM instrument_${table} WHERE uuid = '${uuid}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.DataExportInterface[]);
            });
        });

        return await connection;
    },

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
    getAllServices: async () => {
        const institutions = new Promise<Array<DI.Institution>>((resolve) => {
            db.all(`SELECT * FROM institutions`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.Institution[]);
            });
        });
        const instarray = await institutions;
        const services: { [key: string]: DI.Institution } = {};
        for (const element of instarray) {
            services[element.code] = element;
        }

        const inson = new Promise<Array<DI.INSON>>((resolve) => {
            db.all(`SELECT * FROM inson`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.INSON[]);
            });
        });
        const insonarray = await inson;
        const insons: { [key: string]: DI.INSON } = {};
        for (const element of insonarray) {
            insons[element.code] = element;
        }

        return {
            services,
            insons
        };
    },
    getInsonServices: async (services: string, inson: string) => {
        if (!services) {
            return [];
        }
        const connection = new Promise<Array<DI.Institution>>((resolve) => {
            db.all(`SELECT * FROM institutions WHERE code IN (${services}) AND inson ='${inson}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.Institution[]);
            });
        });
        return await connection;
    },
    getInsonServicesFilled: async (services: string, user_uuid: string, table: string) => {
        if (!services && typeof services !== 'string') {
            return {};
        }
        const serviceList = services.split(',');
        const response: { [key: string]: string } = {};

        for (const srv of serviceList) {
            const connection = new Promise<string>((resolve) => {
                const sql = `SELECT COUNT(*) as total FROM instrument_${table} WHERE service_code = '${srv}' AND user_uuid = '${user_uuid}'`;
                db.all(sql, (error, result) => {
                    if (error) {
                        console.log(error);
                    }
                    if (result && result.length > 0) {
                        resolve(Number(result[0].total).toString());
                    } else {
                        resolve('0');
                    }
                });
            });
            response[srv] = await connection;
        }
        return response;
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
