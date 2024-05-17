import * as DuckDB from "duckdb";
import * as DI from "../interfaces/database";

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

        if(region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if(institution_code) {
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

        if(region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if(institution_code) {
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

// instrument 3
export const csrListALL = async (db: DuckDB.Database, region: string, institution_code: string) => {
    const connection = new Promise<DI.InstrumentInterface[]>((resolve) => {

        let sql = `
        SELECT c.id,
            c.uuid,
            MAX(CASE WHEN variable = 'j1' THEN value ELSE NULL END) j1,
            c.status
        FROM instrument_csr AS c
        LEFT JOIN values_csr AS v ON v.instrument_id = c.id WHERE c.status = 'completed'`;

        if(region) {
            sql += " AND c.region_code = '" + region + "'";
        }

        if(institution_code) {
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