const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db');

const execute = async (sql) => {
    return new Promise((resolve, reject) => {
        db.run(sql, err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

const func = async ()=>{
    try {
        await execute('DROP VIEW IF EXISTS post_view;');
        await execute('DROP TABLE IF EXISTS person;');
        await execute('DROP TABLE IF EXISTS follow;');
        await execute('DROP TABLE IF EXISTS post;');
        await execute('DROP TABLE IF EXISTS zan;');
        db.close()
        console.info('Successfully cleaned up the database')
    } catch (error) {
        console.error(error)
    }
}
func()