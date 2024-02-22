import * as DuckDB from "duckdb";

export interface InstrumentData {
    instrument_id: number | null;
    table: string;
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
            const sqlStart = "UPDATE instrument_" + data.table + " SET updated_at = now()";
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
            let sqlStart = "INSERT INTO instrument_" + data.table + " (created_at, updated_at";
            let sqlValues = ') VALUES (now(), now()';
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

export const getExisting = async (db: DuckDB.Database) => {

    const connection = new Promise<{qmr: number | null, dsee: number | null}>((resolve) => {
        const sql = `SELECT (SELECT id FROM instrument_qmr) AS qmr, (SELECT id FROM instrument_dsee) AS dsee;`;
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
