import * as DuckDB from "duckdb";
import constant from "../libraries/constants";

export interface InstrumentData {
    instrument_id: number | null;
    table: string;
    status: string;
    extras?: Record<string, string>;
    questions: Record<string, { value: string }>;
}
export interface Instrument {
    id: number;
    uuid: string;
    created_at: string;
    updated_at: string;
    instrument_id: number;
    variable: string;
    value: string;
}

export const save = async (data: InstrumentData, db: DuckDB.Database) => {
    const connection = new Promise<number>((resolve) => {

        if (data.instrument_id !== null) {
            // update data
            let sql = "";
            const extras = data.extras;
            const sqlStart = "UPDATE instrument_" + data.table + " SET updated_at = now(), status = '" + data.status + "'";
            let sqlValues = '';
            const sqlEnd = ' WHERE id = ?';

            const params = [];
            for (const key in extras) {
                if (extras[key] !== null) {
                    sqlValues += ", " + key + " = ?";
                    params.push(extras[key]);
                }
            }
            sql += sqlStart + sqlValues + sqlEnd;

            // add instrument ID to the end of the params
            params.push(data.instrument_id);

            // TESTING incoming data...
            // console.log(sql);
            // console.log(data.extras);
            // console.log(params);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            db.all(sql, ...params, (error, _result) => {
                if (error) {
                    console.log("===== Error update instrument =====");
                    console.log(error);
                }

                for (const item in data.questions) {
                    const sql = "INSERT INTO values_" + data.table + " (instrument_id, variable, value) VALUES (?, ?, ?) ON CONFLICT (instrument_id, variable) DO UPDATE SET value = ?;";
                    db.run(sql, data.instrument_id, item, data.questions[item].value, data.questions[item].value, function (error) {
                        if (error) {
                            console.log("===== Error update values =====");
                            console.log(error);
                        }
                    });
                }
                resolve(data.instrument_id);
            });
        } else {
            // insert data

            let sql = "";
            const extras = data.extras;
            let sqlStart = "INSERT INTO instrument_" + data.table + " (status, created_at, updated_at";
            let sqlValues = ") VALUES ('" + data.status + "', now(), now()";
            const sqlEnd = ') RETURNING *';

            const params = [];
            for (const key in extras) {
                if (extras[key] !== null) {
                    sqlStart += ", " + key;
                    sqlValues += ", ?";
                    params.push(extras[key]);
                }
            }
            sql += sqlStart + sqlValues + sqlEnd;

            db.all(sql, ...params, (error, result) => {
                if (error) {
                    console.log("===== Error insert instrument =====");
                    console.log(error);
                }
                const last_id = result[0].id;

                if (last_id) {
                    for (const item in data.questions) {
                        const sql = "INSERT INTO values_" + data.table + " (instrument_id, variable, value) VALUES (?, ?, ?)";
                        db.run(sql, last_id, item, data.questions[item].value, function (error) {
                            if (error) {
                                console.log("===== Error insert values =====");
                                console.log(error);
                            }
                        });
                    }
                    resolve(last_id);
                } else {
                    resolve(-1);
                }
            });
        }
    });
    return await connection;
};

export const get = async (id: string, table: string, db: DuckDB.Database) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        const sql = `SELECT * FROM instrument_${table} LEFT JOIN values_${table} ON instrument_${table}.id = values_${table}.instrument_id WHERE id = ?`;
        db.all(sql, id, (error, result) => {
            if (error) {
                console.log("===== Error get instrument =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}

export const getExisting = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string) => {

    const connection = new Promise<{ qmr: number | null, dsee: number | null }>((resolve) => {

        let sql;
        if (role_code === constant.ROLE_ADMIN_SPECIALIST) {
            sql = `SELECT (SELECT id FROM instrument_qmr WHERE user_uuid = '${user_uuid}') AS qmr, (SELECT id FROM instrument_dsee WHERE user_uuid = '${user_uuid}') AS dsee;`;
        } else if (role_code === constant.ROLE_LOCAL) {
            sql = `SELECT (SELECT id FROM instrument_qmr WHERE institution_code = '${institution_code}') AS qmr, (SELECT id FROM instrument_dsee WHERE institution_code = '${institution_code}') AS dsee;`;
        } else {
            // maby never here
            console.log("It should never be here!");
            sql = `SELECT (SELECT id FROM instrument_qmr) AS qmr, (SELECT id FROM instrument_dsee) AS dsee;`;
        }

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument id =====");
                console.log(error);
            }
            resolve({
                qmr: result[0].qmr,
                dsee: result[0].dsee
            });
        });
    });
    return await connection;
}

// Instrument 1
export const cpisList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string, service_code?: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'pin' THEN value ELSE NULL END) pin,
            MAX(CASE WHEN variable = 'lk1a' THEN value ELSE NULL END) first_name,
            MAX(CASE WHEN variable = 'lk1b' THEN value ELSE NULL END) patronymics,
            MAX(CASE WHEN variable = 'lk1c' THEN value ELSE NULL END) last_name,
            c.status
        FROM instrument_cpis AS c
        LEFT JOIN values_cpis AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += " WHERE c.user_uuid = '" + user_uuid + "'";
            if (service_code) {
                sql += " AND c.service_code = '" + service_code + "'";
            }
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        } else if (service_code) {
            sql += " WHERE c.service_code = '" + service_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteCPIS = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_cpis WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_cpis WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// Instrument 2
export const cibsList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'pin' THEN value ELSE NULL END) pin,
            MAX(CASE WHEN variable = 'lk1a' THEN value ELSE NULL END) first_name,
            MAX(CASE WHEN variable = 'lk1b' THEN value ELSE NULL END) patronymics,
            MAX(CASE WHEN variable = 'lk1c' THEN value ELSE NULL END) last_name,
            c.status
        FROM instrument_cibs AS c
        LEFT JOIN values_cibs AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument 2 =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteCIBS = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_cibs WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_cibs WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// instrument 3
export const csrList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'j1' THEN value ELSE NULL END) j1,
            c.status
        FROM instrument_csr AS c
        LEFT JOIN values_csr AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument CSR =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteStaff = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_csr WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_csr WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// Instrument 7
export const ftchList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string, service_code?: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'ifm1' THEN value ELSE NULL END) ifm1,
            MAX(CASE WHEN variable = 'ifm2' THEN value ELSE NULL END) ifm2,
            MAX(CASE WHEN variable = 'ifm3' THEN value ELSE NULL END) ifm3,
            c.status
        FROM instrument_ftch AS c
        LEFT JOIN values_ftch AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
            if (service_code) {
                sql += " AND c.service_code = '" + service_code + "'";
            }
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        } else if (service_code) {
            sql += " WHERE c.service_code = '" + service_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument FTCH =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteFTCH = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_ftch WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_ftch WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// Instrument 8
export const pfqList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'ig1' THEN value ELSE NULL END) ig1,
            MAX(CASE WHEN variable = 'ig2' THEN value ELSE NULL END) ig2,
            MAX(CASE WHEN variable = 'ig3' THEN value ELSE NULL END) ig3,
            c.status
        FROM instrument_pfq AS c
        LEFT JOIN values_pfq AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument PFQ (Patronat Family Questionnaire) =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deletePFQ = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_pfq WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_pfq WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// Instrument 9
export const eefList = async (db: DuckDB.Database, user_uuid: string, role_code: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'i1' THEN value ELSE NULL END) i1,
            c.status
        FROM instrument_eef AS c
        LEFT JOIN values_eef AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument PFQ (Patronat Family Questionnaire) =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteEEF = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_eef WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_eef WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// Instrument 5
export const yplcsList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'pi1' THEN value ELSE NULL END) pi1,
            MAX(CASE WHEN variable = 'pi1a' THEN value ELSE NULL END) pi1a,
            MAX(CASE WHEN variable = 'pi1b' THEN value ELSE NULL END) pi1b,
            MAX(CASE WHEN variable = 'pi1c' THEN value ELSE NULL END) pi1c,
            c.status
        FROM instrument_yplcs AS c
        LEFT JOIN values_yplcs AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument YPLSC =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteYPLCS = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_yplcs WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_yplcs WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}

// Instrument 5a
export const tqypList = async (db: DuckDB.Database, user_uuid: string, role_code: string, institution_code: string) => {
    const connection = new Promise<Array<Instrument>>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'ptr1' THEN value ELSE NULL END) ptr1,
            MAX(CASE WHEN variable = 'ptr2a' THEN value ELSE NULL END) ptr2a,
            MAX(CASE WHEN variable = 'ptr2b' THEN value ELSE NULL END) ptr2b,
            MAX(CASE WHEN variable = 'ptr2c' THEN value ELSE NULL END) ptr2c,
            c.status
        FROM instrument_tqyp AS c
        LEFT JOIN values_tqyp AS v ON v.instrument_id = c.id`;

        if (role_code === constant.ROLE_DATA_COLLECTOR || role_code === constant.ROLE_HR_SPECIALIST || role_code === constant.ROLE_ADMIN_SPECIALIST || role_code === constant.ROLE_EXT_EVALUATOR) {
            sql += ` WHERE c.user_uuid = '${user_uuid}'`;
        } else if (role_code === constant.ROLE_LOCAL) {
            sql += " WHERE c.institution_code = '" + institution_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument TQYP (Trace questionnaire about the young person who left the alternative care system) =====");
                console.log(error);
            }
            resolve(result as Array<Instrument>);
        });
    });
    return await connection;
}
export const deleteTQYP = async (id: string, db: DuckDB.Database) => {
    const connection = new Promise<boolean>((resolve) => {
        db.run(`DELETE FROM instrument_tqyp WHERE id = '${id}'`, (error) => {
            if (error) {
                console.log(error);
            }
            db.run(`DELETE FROM values_tqyp WHERE instrument_id = '${id}'`, (error) => {
                if (error) {
                    console.log(error);
                }
                resolve(true);
            });
        });
    });
    return await connection;
}
