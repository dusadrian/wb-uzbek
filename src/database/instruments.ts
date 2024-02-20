import * as DuckDB from "duckdb";

export interface InstrumentData {
    instrument_id: number | null;
    table: string;
    extras?: Record<string, string>;
    questions: Record<string, { value: string }>;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const save = async (data: InstrumentData, db: DuckDB.Database) => {
    const connection = new Promise<number>((resolve) => {

        if (data.instrument_id !== null) {
            // update data
            // let sql = "";
            // const extras = data.extras;
            // let sqlStart = "INSERT INTO instrument_" + data.table + " (created_at, updated_at";
            // let sqlValues = ') VALUES (now(), now()';
            // const sqlEnd = ') RETURNING *';

            // const params = [];
            // for (const key in extras) {
            //     if (extras[key] !== null) {
            //         sqlStart += ", " + key;
            //         sqlValues += ", ?";
            //         params.push(extras[key]);
            //     }
            // }
            // sql += sqlStart + sqlValues + sqlEnd;

            // // insert
            // // console.log(sql);
            // // console.log(params);

            // db.all(sql, ...params, (error, result) => {
            //     if (error) {
            //         console.log("===== Error insert instrument =====");
            //         console.log(error);
            //     }
            //     const last_id = result[0].id;

            //     if (last_id) {
            //         for (const item in data.questions) {
            //             const sql = "INSERT INTO values_" + data.table + " (instrument_id, variable, value) VALUES (?, ?, ?)";
            //             db.run(sql, last_id, item, data.questions[item].value, function (error) {
            //                 if (error) {
            //                     console.log("===== Error insert values =====");
            //                     console.log(error);
            //                 }
            //             });
            //         }
            //         resolve(last_id);
            //     } else {
            //         resolve(-1);
            //     }
            // });
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

            // insert
            // console.log(sql);
            // console.log(params);

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

