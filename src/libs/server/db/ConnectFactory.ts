import sqlite3 from 'sqlite3'
// SQLITE文档： https://www.sqlitetutorial.net/sqlite-nodejs/
export default class ConnectFactory {
    static create(): Promise<sqlite3.Database> {
        return new Promise((resolve, reject) => {
            let db = new sqlite3.Database('./database.db', err => {
                if (err) {
                    reject(err)
                } else {
                    resolve(db)
                }
            })
        })
    }
}