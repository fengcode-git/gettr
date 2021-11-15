import sqlite3 from 'sqlite3'
import ConnectFactory from './ConnectFactory';

class DbHelper {
    private _db: sqlite3.Database;
    private constructor(db: sqlite3.Database) {
        this._db = db;
    }
    static async create(): Promise<DbHelper> {
        let db = await ConnectFactory.create()
        return new DbHelper(db)
    }
    close() {
        return new Promise((resolve, reject) => {
            this._db.close(function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(null)
                }
            })
        })
    }
    private async _exec(sql: string) {
        return new Promise((resolve, reject) => {
            this._db.exec(sql, function (err) {
                if (err) {
                    reject(resolve)
                } else {
                    resolve(null)
                }
            })
        })
    }
    async beginTransaction() {
        await this._exec("BEGIN")
    }
    async commit() {
        await this._exec('COMMIT')
    }
    async rollback() {
        await this._exec('ROLLBACK')
    }
    async execute(sql: string, args: Array<any> = []): Promise<number> {
        return new Promise((resolve, reject) => {
            this._db.run(sql, args, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(this.changes)
                }
            })
        })
    }
    async query<T>(sql: string, args: Array<any> = []): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            this._db.all(sql, function (err, rows) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }
    async single<T>(sql: string, args: Array<any> = []): Promise<T | null> {
        return new Promise((resolve, reject) => {
            this._db.get(sql, args, function (err, row) {
                if (err) {
                    reject(err)
                } else {
                    if (row) {
                        resolve(row)
                    } else {
                        resolve(null)
                    }
                }
            })
        })
    }
    async scalar(sql: string, args: Array<any> = []): Promise<number> {
        return new Promise((resolve, reject) => {
            this._db.get(sql, args, function (err, row) {
                if (err) {
                    reject(err)
                } else {
                    let value = row[Object.keys(row)[0]]
                    if (value) {
                        resolve(parseFloat(value))
                    } else {
                        resolve(0)
                    }
                }
            })
        })
    }

}
export default DbHelper