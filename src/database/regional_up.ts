import * as DuckDB from "duckdb";
import * as DI from "../interfaces/database";


export const getRegionalInstitutions = async (db: DuckDB.Database, region: string) => {
    const connection = new Promise<Array<DI.Institution>>((resolve) => {
        db.all(`SELECT * FROM institutions WHERE region = '${region}' AND CAST(type AS INTEGER) < 30`, (error, result) => {
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
        db.all(`SELECT * FROM inson WHERE region = '${region}'`, (error, result) => {
            if (error) {
                console.log(error);
            }
            resolve(result as DI.INSON[]);
        });
    });
    return await connection;
}


// Instrument 1
export const cpisListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
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

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
        }

        sql += " GROUP BY c.id, c.uuid, c.status;";

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
export const ftchListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
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

        if (institution_code) {
            sql += " AND c.institution_code = '" + institution_code + "'";
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