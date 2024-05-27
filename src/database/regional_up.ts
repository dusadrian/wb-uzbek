import * as DuckDB from "duckdb";
import * as DI from "../interfaces/database";
import constant from "../libraries/constants";


export const getRegionalInstitutions = async (db: DuckDB.Database, region: string) => {
    const connection = new Promise<Array<DI.Institution>>((resolve) => {

        let sql = `SELECT * FROM institutions WHERE CAST(type AS INTEGER) < 30`;
        if(region) {
            sql += ` AND region = '${region}'`;
        }

        db.all(sql, (error, result) => {
            if (error) {
                console.log(error);
            }
            resolve(result as DI.Institution[]);
        });
    });
    return await connection;
}
export const getRegionalInsons = async (db: DuckDB.Database, region: string) => {
    const connection = new Promise<Array<DI.INSON>>((resolve) => {

        let sql = `SELECT * FROM inson`;
        if(region) {
            sql += ` WHERE region = '${region}'`;
        }

        db.all(sql, (error, result) => {
            if (error) {
                console.log(error);
            }
            resolve(result as DI.INSON[]);
        });
    });
    return await connection;
}

// Dashboard
export const filledInstrumentsR = async (db: DuckDB.Database, region?: string, typeOfInstitution?: string, institution?: string) => {

    let where = '';

    if (region || typeOfInstitution || institution) {
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

    // console.log('filledInstrumentsR', where);
    

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
}
export const getInstrumentsToBeFilledBy = async (db: DuckDB.Database, region: string, institution: string, typeOfInstitution: string) => {

    let where = '';

    if (region) {
        where += ` AND region = '${region}'`;
    }

    if (region && institution && !constant.INSON.includes(typeOfInstitution)) {
        where += ` AND code = '${institution}'`;
    }

    const i1 = new Promise<DI.StatusInterface>((resolve) => {

        let localWhere = where;
        if (institution && constant.INSON.includes(typeOfInstitution)) {
            localWhere += ` AND inson = '${institution}'`;
        }

        let localType = '';
        if (typeOfInstitution === '10') {
            localType = constant.CHILD_CARE.join(',');
        } else if (typeOfInstitution === '91') {
            localType = constant.INSON_SERVICE.join(',');
        } else {
            localType = constant.CHILD_CARE.concat(constant.INSON_SERVICE).join(',');
        }

        db.all(`SELECT SUM(children) AS total FROM institutions WHERE type IN (${localType}) ${localWhere}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument1 = await i1;

    const i2 = new Promise<DI.StatusInterface>((resolve) => {
        db.all(`SELECT SUM(children) AS total FROM institutions WHERE type IN (${constant.SPECIALIZED.join(',')}) ${where}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument2 = await i2;

    const i3 = new Promise<DI.StatusInterface>((resolve) => {

        let localType = '';
        if (typeOfInstitution === '10') {
            localType = constant.CHILD_CARE.join(',');
        } else if (typeOfInstitution === '20') {
            localType = constant.SPECIALIZED.join(',');
        } else {
            localType = constant.CHILD_CARE.concat(constant.SPECIALIZED).join(',')
        }

        db.all(`SELECT SUM(employees) AS total FROM institutions WHERE  type IN (${localType}) AND employees IS NOT NULL ${where}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument3 = await i3;

    const i4 = new Promise<DI.StatusInterface>((resolve) => {

        let localType = '';
        if (typeOfInstitution === '10') {
            localType = constant.CHILD_CARE.join(',');
        } else if (typeOfInstitution === '20') {
            localType = constant.SPECIALIZED.join(',');
        } else {
            localType = constant.CHILD_CARE.concat(constant.SPECIALIZED).join(',')
        }

        db.all(`SELECT COUNT(*) AS total FROM institutions WHERE type IN (${localType}) ${where}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument4 = await i4;

    const i5a = new Promise<DI.StatusInterface>((resolve) => {

        let localWhere = where;
        if (institution && constant.INSON.includes(typeOfInstitution)) {
            localWhere += ` AND inson = '${institution}'`;
        }

        let localType = '';
        if (typeOfInstitution === '10') {
            localType = constant.CHILD_CARE.join(',');
        } else if (typeOfInstitution === '20') {
            localType = constant.SPECIALIZED.join(',');
        } else if(typeOfInstitution === '91') {
            localType = constant.INSON_SERVICE.join(',')
        } else {
            localType = constant.CHILD_CARE.concat(constant.SPECIALIZED).concat(constant.INSON_SERVICE).join(',')
        }

        db.all(`SELECT SUM(leavers) AS total FROM institutions WHERE type IN (${localType}) AND leavers IS NOT NULL ${localWhere}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument5a = await i5a;

    const i5 = new Promise<DI.StatusInterface>((resolve) => {

        let localWhere = where;
        if (institution && constant.INSON.includes(typeOfInstitution)) {
            localWhere += ` AND inson = '${institution}'`;
        }

        db.all(`SELECT SUM(leavers) AS total FROM institutions WHERE leavers IS NOT NULL ${localWhere}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument5 = await i5;

    const i6 = new Promise<DI.StatusInterface>((resolve) => {

        let localType = '';
        if (typeOfInstitution === '10') {
            localType = constant.CHILD_CARE.join(',');
        } else if (typeOfInstitution === '20') {
            localType = constant.SPECIALIZED.join(',');
        } else {
            localType = constant.CHILD_CARE.concat(constant.SPECIALIZED).join(',')
        }

        db.all(`SELECT COUNT(*) AS total FROM institutions WHERE type IN (${localType}) ${where}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument6 = await i6;

    const i7 = new Promise<DI.StatusInterface>((resolve) => {

        let localWhere = where;
        if (institution && constant.INSON.includes(typeOfInstitution)) {
            localWhere += ` AND code = '${institution}'`;
        }

        db.all(`SELECT SUM(fth) AS total FROM inson WHERE fth IS NOT NULL ${localWhere}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument7 = await i7;

    const i8 = new Promise<DI.StatusInterface>((resolve) => {

        let localWhere = where;
        if (institution && constant.INSON.includes(typeOfInstitution)) {
            localWhere += ` AND code = '${institution}'`;
        }

        db.all(`SELECT SUM(pf) AS total FROM inson WHERE pf IS NOT NULL ${localWhere}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument8 = await i8;

    const i9 = new Promise<DI.StatusInterface>((resolve) => {

        let localType = '';
        if (typeOfInstitution === '10') {
            localType = constant.CHILD_CARE.join(',');
        } else if (typeOfInstitution === '20') {
            localType = constant.SPECIALIZED.join(',');
        } else {
            localType = constant.CHILD_CARE.concat(constant.SPECIALIZED).join(',')
        }

        db.all(`SELECT COUNT(*) AS total FROM institutions WHERE type IN (${localType}) ${where}`, (error, result) => {
            if (error) { console.log(error); }
            resolve(result[0] as DI.StatusInterface);
        });
    });
    const instrument9 = await i9;

    return {
        instrument1: Number(instrument1.total ?? 0),
        instrument2: Number(instrument2.total ?? 0),
        instrument3: Number(instrument3.total ?? 0),
        instrument4: Number(instrument4.total ?? 0),
        instrument5a: Number(instrument5a.total ?? 0),
        instrument5: Number(instrument5.total ?? 0),
        instrument6: Number(instrument6.total ?? 0),
        instrument7: Number(instrument7.total ?? 0),
        instrument8: Number(instrument8.total ?? 0),
        instrument9: Number(instrument9.total ?? 0),
    };
}


export const getFilledInstitutions = async (db: DuckDB.Database, instrument: string, institutionCodes: { code: string, inson: number }[], typeOfInstitution: string, region?: string) => {
    const response: { [key: string]: number } = {};
    if (instrument === '1') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_cpis WHERE institution_code = '${code}'`;
                if (inst.inson) {
                    sql = `SELECT COUNT(*) AS total FROM instrument_cpis WHERE service_code = '${code}'`;
                }

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                // console.log('getFilledInstitutions', sql);

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '2') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_cibs WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '3') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_csr WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '4') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_qmr WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '5a') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_tqyp WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '5') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_yplcs WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '6') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_dsee WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '7') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_ftch WHERE institution_code = '${code}'`;
                if (inst.inson) {
                    sql = `SELECT COUNT(*) AS total FROM instrument_ftch WHERE service_code = '${code}'`;
                }

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                console.log('getFilledInstitutions', sql);

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '8') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_pfq WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    if (instrument === '9') {
        for (const inst of institutionCodes) {
            const code = inst.code;
            const connection = new Promise<number>((resolve) => {

                let sql = `SELECT COUNT(*) AS total FROM instrument_eef WHERE institution_code = '${code}'`;

                if (region) {
                    sql += ` AND region_code = '${region}'`;
                }

                db.all(sql, (error, result) => {
                    if (error) { console.log(error); }
                    resolve(Number(result[0].total) ?? 0);
                });
            });
            response[code] = await connection;
        }
    }
    return response;
}
// select instrument
export const getInstitutionsByTypeAndRegion = async (db: DuckDB.Database, instrument: string, region: string, type: string, insonCode: string) => {

    console.log('instrument', instrument);
    console.log('region', region);
    console.log('type', type);
    console.log('insonCode', insonCode);

    if (instrument === '8') {
        const connection = new Promise((resolve) => {

            let sql = `SELECT * FROM inson`;
            if (region) {
                sql += ` WHERE region = '${region}'`;
            }

            db.all(sql, (error, result) => {
                if (error) {
                    console.log(error);
                }
                resolve(result);
            });
        });
        return await connection as DI.INSON[];

    } else {

        const connection = new Promise((resolve) => {

            let sql = `SELECT * FROM institutions`;

            let instType = '';

            if (instrument === '1') {
                if (type === '10') {
                    instType = constant.CHILD_CARE.join("','");
                } else if (type === '91') {
                    instType = constant.INSON_SERVICE.join("','");
                } else {
                    instType = constant.CHILD_CARE.concat(constant.INSON_SERVICE).join("','");
                }
            }
            if (instrument === '2') {
                instType = constant.SPECIALIZED.join("','");
            }
            if (instrument === '3' || instrument === '4' || instrument === '6' || instrument === '9') {
                if (type === '10') {
                    instType = constant.CHILD_CARE.join("','");
                } else if (type === '20') {
                    instType = constant.SPECIALIZED.join("','");
                } else {
                    instType = constant.CHILD_CARE.concat(constant.SPECIALIZED).join("','");
                }
            }
            if (instrument === '5a') {
                if (type === '10') {
                    instType = constant.CHILD_CARE.join("','");
                } else if (type === '20') {
                    instType = constant.SPECIALIZED.join("','");
                } else if (type === '91') {
                    instType = constant.INSON_SERVICE.join("','");
                } else {
                    instType = constant.CHILD_CARE.concat(constant.SPECIALIZED).concat(constant.INSON_SERVICE).join("','");
                }
            }
            if (instrument === '5') {
                instType = constant.INSON_SERVICE.join("','");
            }
            if (instrument === '7' || instrument === '8') {
                instType = constant.INSON_SERVICE.join("','");
            }

            if (instType) {
                sql += ` WHERE type IN ('${instType}')`;
            }

            if (region) {
                sql += ` AND region = '${region}'`;
            }

            if (insonCode) {
                sql += ` AND inson = '${insonCode}'`;
            }

            db.all(sql, (error, result) => {
                if (error) { console.log(error); }
                resolve(result);
            });
        });
        return await connection as DI.Institution[];
    }
}

// Instrument 1
export const cpisListALL = async (db: DuckDB.Database, region: string, institution_code: string, service_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'pin' THEN value ELSE NULL END) pin,
            MAX(CASE WHEN variable = 'lk1a' THEN value ELSE NULL END) first_name,
            MAX(CASE WHEN variable = 'lk1b' THEN value ELSE NULL END) patronymics,
            MAX(CASE WHEN variable = 'lk1c' THEN value ELSE NULL END) last_name,
            c.status
        FROM instrument_cpis AS c
        LEFT JOIN values_cpis AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code && !service_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        } else if (service_code) {
            sql += " AND c.service_code = '" + service_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        console.log(sql);


        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 2
export const cibsListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'pin' THEN value ELSE NULL END) pin,
            MAX(CASE WHEN variable = 'lk1a' THEN value ELSE NULL END) first_name,
            MAX(CASE WHEN variable = 'lk1b' THEN value ELSE NULL END) patronymics,
            MAX(CASE WHEN variable = 'lk1c' THEN value ELSE NULL END) last_name,
            c.status
        FROM instrument_cibs AS c
        LEFT JOIN values_cibs AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument 2 =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 3
export const csrListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'j1' THEN value ELSE NULL END) j1,
            c.status
        FROM instrument_csr AS c
        LEFT JOIN values_csr AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument CSR =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 5
export const yplcsListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'pi1' THEN value ELSE NULL END) pi1,
            MAX(CASE WHEN variable = 'pi1a' THEN value ELSE NULL END) pi1a,
            MAX(CASE WHEN variable = 'pi1b' THEN value ELSE NULL END) pi1b,
            MAX(CASE WHEN variable = 'pi1c' THEN value ELSE NULL END) pi1c,
            c.status
        FROM instrument_yplcs AS c
        LEFT JOIN values_yplcs AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument YPLSC =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 5a
export const tqypListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'ptr1' THEN value ELSE NULL END) ptr1,
            MAX(CASE WHEN variable = 'ptr2a' THEN value ELSE NULL END) ptr2a,
            MAX(CASE WHEN variable = 'ptr2b' THEN value ELSE NULL END) ptr2b,
            MAX(CASE WHEN variable = 'ptr2c' THEN value ELSE NULL END) ptr2c,
            c.status
        FROM instrument_tqyp AS c
        LEFT JOIN values_tqyp AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument TQYP =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 7
export const ftchListALL = async (db: DuckDB.Database, region: string, institution_code: string, service_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'ifm1' THEN value ELSE NULL END) ifm1,
            MAX(CASE WHEN variable = 'ifm2' THEN value ELSE NULL END) ifm2,
            MAX(CASE WHEN variable = 'ifm3' THEN value ELSE NULL END) ifm3,
            c.status
        FROM instrument_ftch AS c
        LEFT JOIN values_ftch AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code && !service_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        } else if (service_code) {
            sql += " AND c.service_code = '" + service_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";


        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument FTCH =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 8
export const pfqListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'ig1' THEN value ELSE NULL END) ig1,
            MAX(CASE WHEN variable = 'ig2' THEN value ELSE NULL END) ig2,
            MAX(CASE WHEN variable = 'ig3' THEN value ELSE NULL END) ig3,
            c.status
        FROM instrument_pfq AS c
        LEFT JOIN values_pfq AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument PFQ =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}

// Instrument 9
export const eefListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'i1' THEN value ELSE NULL END) i1,
            c.status
        FROM instrument_eef AS c
        LEFT JOIN values_eef AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if (region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += ` GROUP BY c.id, c.uuid, c.status;`;

        db.all(sql, (error, result) => {
            if (error) {
                console.log("===== Error get instrument EEF =====");
                console.log(error);
            }
            resolve(result as DI.InstrumentInterface[]);
        });
    });
    return await connection;
}