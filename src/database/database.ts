import * as path from "path";
import * as DuckDB from "duckdb";
import * as DI from "../interfaces/database";
import { save as instrumentSave, get as instrumentGet, getExisting, cpisList, deleteCPIS, cibsList, deleteCIBS, csrList, deleteStaff, ftchList, deleteFTCH, pfqList, deletePFQ, eefList, deleteEEF, yplcsList, deleteYPLCS, tqypList, deleteTQYP } from "./instruments";
import { filledInstrumentsR, getInstrumentsToBeFilledBy, getFilledInstitutions, getRegionalInstitutions, getRegionalInsons, getInstitutionsByTypeAndRegion, cpisListALL, cibsListALL, csrListALL, yplcsListALL, tqypListALL, ftchListALL, pfqListALL, eefListALL } from "./regional_up";
import constant from '../libraries/constants'


const duckdbOptions: {
    access_mode: 'READ_WRITE' | 'READ_ONLY',
    max_memory?: string,
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

        // rata tampita
        // for (let i = 0; i < 300; i++) {
        //     db.all("SELECT nextval('id_institution_sequence') AS nextval;", (error) => { console.log(error); });
        // }

        const connection = new Promise<Array<DI.User>>((resolve) => {
            db.all(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}' AND status = true`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },
    checkDisabledUser: async (username: string, password: string) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {

            const localUserRole = constant.ROLE_LOCAL;
            const localUserType = constant.CHILD_CARE.concat(constant.SPECIALIZED).join(',');
            const insonUserType = constant.INSON.join(',');

            db.all(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}' AND status = false AND ((role_code = ${localUserRole} AND service_type_code IN (${localUserType})) OR service_type_code IN (${insonUserType}))`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.User[]);
            });
        });
        return await connection;
    },
    enableUser: async (uuid: string) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE users SET status = true WHERE uuid = '${uuid}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
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
    getNextUser: async (userType: string, service_type_code: string, institution_code: string) => {
        const connection = new Promise<Array<DI.User>>((resolve) => {
            db.all(`SELECT * FROM users WHERE role_code = '${userType}' AND service_type_code = '${service_type_code}' AND institution_code = '${institution_code}' AND status = false LIMIT 1`, (error, result) => {
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
        const connection = new Promise<Array<DI.Institution | DI.INSON>>((resolve) => {
            let sql = `SELECT * FROM institutions WHERE code = '${code}'`;
            if (constant.INSON.includes(service_type_code)) {
                sql = `SELECT * FROM inson WHERE code = '${code}'`;
            }

            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.Institution[] | DI.INSON[]);
            });
        });
        return await connection;
    },
    getQMRInstrumentForInstitution: async (institution_code: string, regionCode: string) => {
        const connection = new Promise<Array<DI.InstrumentInterface>>((resolve) => {

            let sql = `SELECT * FROM instrument_qmr WHERE institution_code = '${institution_code}'`;
            if (regionCode && regionCode !== '17') {
                sql += ` AND region_code = '${regionCode}'`;
            }

            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.InstrumentInterface[]);
            });
        });
        return await connection;
    },
    getDSEEInstrumentForInstitution: async (institution_code: string, regionCode: string) => {
        const connection = new Promise<Array<DI.InstrumentInterface>>((resolve) => {

            let sql = `SELECT * FROM instrument_dsee WHERE institution_code = '${institution_code}'`;
            if (regionCode && regionCode !== '17') {
                sql += ` AND region_code = '${regionCode}'`;
            }
            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result as DI.InstrumentInterface[]);
            });
        });
        return await connection;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateService: async (data: DI.UpdateServiceObjInterface) => {
        const connection = new Promise<boolean>((resolve) => {

            db.run(`UPDATE institutions SET children = '${data.children}', leavers = '${data.leavers}', employees = '${data.employees}', changed = true WHERE id = '${data.institution_id}' AND uuid = '${data.institutionUUID}';`, (error) => {
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
                    db.run(`UPDATE institutions SET children = '${service.children}', leavers = '${service.leavers}', changed = true WHERE id = '${service.id}' AND uuid = '${service.uuid}'`, (error) => {
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
            db.run(`UPDATE inson SET pf = '${data.pf}', children_fth = '${data.children_fth}', leavers_fth = '${data.leavers_fth}', changed = true WHERE id = '${data.institution_id}' AND uuid = '${data.institutionUUID}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },
    addInsonService: async (data: DI.AddInsonServiceObjInterface) => {

        const connection = new Promise<boolean>((resolve) => {
            db.run(`INSERT INTO institutions (
                uuid,
                code,
                name_en,
                name_uz,
                name_ru,
                type,
                shorttype,
                address,
                region,
                district,
                settlement,
                settlement_type,
                capacity,
                children,
                leavers,
                employees,
                inson,
                changed,
                activcode1,
                activcode2,
                activcode3,
                activcode4,
                activcode5
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                data.uuid,
                data.code,
                data.name_en,
                data.name_uz,
                data.name_ru,
                data.type,
                data.shorttype,
                data.address,
                data.region,
                data.district,
                data.settlement,
                data.settlement_type,
                data.capacity,
                data.children,
                data.leavers,
                data.employees,
                data.inson,
                true,
                data.activcode1,
                data.activcode2,
                data.activcode3,
                data.activcode4,
                data.activcode5,
                (error) => {
                    if (error) {
                        console.log(error);
                        resolve(false);
                    }
                    resolve(true);
                });
        });
        await connection;

        // update in INSON table
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const connection2 = new Promise<any[]>((resolve) => {
            db.all(`SELECT * FROM inson WHERE code = '${data.inson}'`, (error, result) => {
                if (error) {
                    console.log(error);
                    resolve([]);
                }
                resolve(result);
            });
        });

        const services = await connection2;
        let newServices = '';
        let newChildrenFth = '';
        let newLeaversFth = '';
        if (services.length > 0 && services[0].services) {
            newServices = services[0].services + ',' + data.code;
            newChildrenFth = services[0].children_fth + data.children;
            newLeaversFth = services[0].leavers_fth + data.leavers;
        } else {
            newServices = data.code;
            newChildrenFth = data.children;
            newLeaversFth = data.leavers;
        }
        const connection3 = new Promise<boolean>((resolve) => {
            db.run(`UPDATE inson SET services = '${newServices}', children_fth ='${newChildrenFth}', leavers_fth = '${newLeaversFth}', changed = true WHERE code = '${data.inson}'`, (error) => {
                if (error) {
                    console.log(error);
                    resolve(false);
                }
                resolve(true);
            });
        });
        return await connection3;
    },
    checkServiceCode: async (code: string, region: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const connection = new Promise<any[]>((resolve) => {
            const sql = `SELECT uuid FROM fth_codes WHERE code = '${code}' AND region = '${region}' AND used = false`;
            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result);
            });
        });
        return await connection;
    },
    updateInsonServiceCodes: async (code: string) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE fth_codes SET used = true WHERE code = '${code}'`, (error) => {
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
            db.all(`SELECT * FROM users WHERE institution_code = '${institution_code}' AND status = true`, (error, result) => {
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

    // For local coordinators only - enable user
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addUser: async (user: any) => {
        const connection = new Promise<boolean>((resolve) => {
            console.log('aici');

            db.run(`UPDATE users SET
                        name = ?,
                        patronymics = ?,
                        surname = ?,
                        job_title = ?,
                        profession = ?,
                        phone = ?,
                        email = ?,
                        status = true
                    WHERE id = ? and uuid = ?`,
                user.name,
                user.patronymics,
                user.surname,
                user.job_title,
                user.profession,
                user.phone,
                user.email,
                user.id,
                user.uuid,
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

    filledInstruments: async (role_code: string, user_uuid: string, institution_code: string, region?: string, typeOfInstitution?: string, institution?: string) => {

        let where = '';

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST) {
            where += ` WHERE user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            where += ` WHERE institution_code = '${institution_code}'`;
        } else if (region || typeOfInstitution || institution) {
            where += ` WHERE `;
        }

        if (region) {
            where += `region_code = '${region}'`;
        }

        if (region && typeOfInstitution) {
            where += ` AND `;
        }

        if (typeOfInstitution) {
            if (typeOfInstitution === '10') {
                where += `institution_type IN (${constant.CHILD_CARE.join(',')})`;
            } else if (typeOfInstitution === '20') {
                where += `institution_type IN (${constant.SPECIALIZED.join(',')})`;
            } else {
                where += `institution_type IN (${constant.INSON.join(',')})`;
            }
        }

        if (region && typeOfInstitution && institution) {
            where += ` AND institution_code = '${institution}'`;
        }

        const i1 = new Promise<DI.StatusInterface[]>((resolve) => {
            const sql = `SELECT status, COUNT(*) AS total FROM instrument_cpis ${where} GROUP BY status`;
            db.all(sql, (error, result) => {
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
            const sql = `SELECT status, COUNT(*) AS total FROM instrument_pfq ${where} GROUP BY status`;
            db.all(sql, (error, result) => {
                if (error) { console.log(error, 'Instrument 8 filledInstruments'); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument8 = await i8;
        const i9 = new Promise<DI.StatusInterface[]>((resolve) => {
            db.all(`SELECT status, COUNT(*) AS total FROM instrument_eef ${where} GROUP BY status`, (error, result) => {
                if (error) { console.log(error); }
                resolve(result as DI.StatusInterface[]);
            });
        });
        const instrument9 = await i9;

        return {
            instrument1,
            instrument2,
            instrument3,
            instrument4,
            instrument5a,
            instrument5,
            instrument6,
            instrument7,
            instrument8,
            instrument9,
        };
    },

    getInstitutionByType: async (region: string, type: string) => {
        const connection = new Promise<Array<DI.Institution>>((resolve) => {

            let sql = '';
            if (type === '10') {
                sql = `SELECT * FROM institutions WHERE region = '${region}' AND type IN (${constant.CHILD_CARE.join(',')})`
            } else if (type === '20') {
                sql = `SELECT * FROM institutions WHERE region = '${region}' AND type IN (${constant.SPECIALIZED.join(',')})`
            } else {
                sql = `SELECT * FROM inson WHERE region = '${region}'`
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


    getDataForDownload: async (table: string, role_code: string, user_uuid: string, institution_code: string) => {
        const connection = new Promise<DI.DataExportInterface[]>((resolve) => {
            // only completed instruments

            let where = ''; // only user's data
            if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST) {
                where += ` AND user_uuid = '${user_uuid}'`;
            } else if (role_code === constant.ROLE_LOCAL) {
                where += ` AND institution_code = '${institution_code}'`;
            }
            const sql = `SELECT * FROM instrument_${table} LEFT JOIN values_${table} ON values_${table}.instrument_id = instrument_${table}.id WHERE status = 'completed' ${where}`;

            db.all(sql, (error, result) => {
                if (error) {
                    console.log("===== Error getDataForDownload =====");
                    console.log(error);
                }
                resolve(result as DI.DataExportInterface[]);
            });
        });
        return await connection;
    },
    getInstitutionDataForDownload: async () => {
        const connection = new Promise<DI.DataExportInterface[]>((resolve) => {
            db.all(`SELECT * FROM institutions WHERE changed = true`, (error, result) => {
                if (error) {
                    console.log("===== Error getInstitutionDataForDownload =====");
                    console.log(error);
                }
                resolve(result as DI.DataExportInterface[]);
            });
        });
        const institution = await connection;
        const connection2 = new Promise<DI.DataExportInterface[]>((resolve) => {
            db.all(`SELECT * FROM inson WHERE changed = true`, (error, result) => {
                if (error) {
                    console.log("===== Error getInstitutionDataForDownload =====");
                    console.log(error);
                }
                resolve(result as DI.DataExportInterface[]);
            });
        });
        const inson = await connection2;
        return {
            institution,
            inson
        };
    },
    updateImportedInstitution: async (data: DI.InstitutionDataExportInterface) => {

        const searchUUID = new Promise<boolean>((resolve) => {
            db.all(`SELECT * FROM institutions WHERE uuid = '${data.uuid}'`, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result.length > 0);
            });
        });

        const exists = await searchUUID;

        if (exists) {
            const connection = new Promise<boolean>((resolve) => {
                const sql = `UPDATE institutions SET
                name_en = '${data.name_en.replace(/'/g, "''")}',
                name_uz = '${data.name_uz.replace(/'/g, "''")}',
                name_ru = '${data.name_ru.replace(/'/g, "''")}',
                type = '${data.type}',
                shorttype = '${data.shorttype}',
                address = '${data.address.replace(/'/g, "''")}',
                region = '${data.region}',
                district = '${data.district}',
                settlement = '${data.settlement}',
                settlement_type = '${data.settlement_type}',
                capacity = ${data.capacity ?? 0},
                children = ${data.children ?? 0},
                leavers = ${data.leavers ?? 0},
                employees = ${data.employees ?? 0},
                inson = ${data.inson ?? null},
                changed = true
                WHERE uuid = '${data.uuid}'`;
                db.run(sql,
                    (error) => {
                        if (error) {
                            console.log("UPDATE institutions SET");
                            console.log(error);
                        }
                        resolve(true);
                    });
            });
            return await connection;
        } else {
            const connection = new Promise<boolean>((resolve) => {
                db.run(`INSERT INTO institutions (
                uuid,
                code,
                name_en,
                name_uz,
                name_ru,
                type,
                shorttype,
                address,
                region,
                district,
                settlement,
                settlement_type,
                capacity,
                children,
                leavers,
                employees,
                inson,
                changed
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                    data.uuid,
                    data.code,
                    data.name_en,
                    data.name_uz,
                    data.name_ru,
                    data.type,
                    data.shorttype,
                    data.address,
                    data.region,
                    data.district,
                    data.settlement,
                    data.settlement_type,
                    data.capacity,
                    data.children,
                    data.leavers,
                    data.employees,
                    data.inson,
                    true,
                    (error) => {
                        if (error) {
                            console.log("INSERT INTO institutions");
                            console.log(error);
                            resolve(false);
                        }
                        resolve(true);
                    });
            });
            return await connection;
        }
    },
    updateImportedInson: async (data: DI.InsonDataExportInterface) => {
        const connection = new Promise<boolean>((resolve) => {
            db.run(`UPDATE inson SET
                name_en = '${data.name_en}',
                name_uz = '${data.name_uz}',
                name_ru = '${data.name_ru}',
                region = '${data.region}',
                district = '${data.district}',
                settlement = '${data.settlement}',
                pf = '${data.pf}',
                fth = '${data.fth}',
                children_fth = '${data.children_fth}',
                leavers_fth = '${data.leavers_fth}',
                services = '${data.services}',
                changed = true
                WHERE uuid = '${data.uuid}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
        return await connection;
    },

    getInstrumentIdFromUUId: async (table: string, uuid: string, institution_code?: string) => {
        const connection = new Promise<DI.DataExportInterface[]>((resolve) => {

            let sql = `SELECT id FROM instrument_${table} WHERE uuid = '${uuid}'`;

            // instrument 4 - QMR
            if(table === 'qmr' && institution_code){
                sql = `SELECT id FROM instrument_${table} WHERE institution_code = '${institution_code}'`;
            }
            // instrument 6 - DSEE
            if(table === 'dsee' && institution_code){
                sql = `SELECT id FROM instrument_${table} WHERE institution_code = '${institution_code}'`;
            }

            db.all(sql, (error, result) => {
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

    exportParquet: async (filters: {
        region: string;
        type: string;
        institution: string;
    }) => {

// TODO function to export (transposed) tables into parquet files for R:
// `
//  COPY (PIVOT values_qmr ON variable USING MAX(value) GROUP BY instrument_id)
//  TO '${path.join(dbDir, "qmr.parquet")}'
//  (FORMAT 'parquet')
// `
        const instruments = ['cpis', 'cibs', 'csr', 'qmr', 'tqyp', 'yplcs', 'dsee', 'ftch', 'pfq'];
        for (let i = 0; i < instruments.length; i++) {
            let sqlSelect = 'SELECT id FROM instrument_' + instruments[i];
            if (filters.region != '' || filters.type != '' || filters.institution != '') {
                sqlSelect += ' WHERE ';
                let prev = false;
                if (filters.region != '') {
                    sqlSelect += `region_code = '${filters.region}'`;
                    prev = true;
                }
                if (filters.type != '') {
                    if (prev) {
                        sqlSelect += ' AND ';
                    }
                    sqlSelect += `institution_type = '${filters.type}'`;
                    prev
                }
                if (filters.institution != '') {
                    if (prev) {
                        sqlSelect += ' AND ';
                    }
                    sqlSelect += `institution_code = '${filters.institution}'`;
                }
            }

            sqlSelect = `SELECT * FROM values_` + instruments[i] + ` WHERE instrument_id IN (` + sqlSelect + `)`;

            const sql = `COPY (PIVOT (` + sqlSelect + `)
                ON variable USING MAX(value) GROUP BY instrument_id)
                TO '${path.join(dbDir, instruments[i] + ".parquet")}'
                (FORMAT 'parquet');
            `;

            const connection = new Promise<boolean>((resolve) => {
                db.run(sql, (error) => {
                    if (error) {
                        console.log(error);
                        resolve(false);
                    }
                    resolve(true);
                });
            });

            await connection;
        }

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
    // regional & national
    filledInstrumentsR,
    getFilledInstitutions,
    getInstrumentsToBeFilledBy,
    getRegionalInstitutions,
    getRegionalInsons,
    getInstitutionsByTypeAndRegion,
    cpisListALL,
    cibsListALL,
    csrListALL,
    yplcsListALL,
    tqypListALL,
    ftchListALL,
    pfqListALL,
    eefListALL,
}
