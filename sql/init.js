const dayjs = require('dayjs');
const fs = require('fs');
const md5 = require('md5');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { v4: uuidv4 } = require('uuid');

let db = new sqlite3.Database('./database.db');

const execute = async (fileName) => {
    return new Promise((resolve, reject) => {
        try {
            let file = path.join(__dirname, fileName);
            let sql = fs.readFileSync(file, 'utf-8');
            db.run(sql, err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        } catch (err) {
            reject(err)
        }
    })
}

const createAdmin = () => {
    let sql = 'insert into person(id, account_name, nickname, password, avatar, create_time, role) values (?,?,?,?,?,?,?);';
    let data = [uuidv4(), 'admin', '管理员', md5('123456'), '', dayjs().format('YYYY-MM-DD HH:mm:ss'), 0];
    return new Promise((resolve, reject) => {
        db.run(sql, data, err => {
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

const initDb = async () => {
    try {
        await execute('t_person.sql');
        await execute('t_follow.sql');
        await execute('t_post.sql');
        await execute('t_zan.sql');
        await execute('t_post_view.sql');
        await createAdmin();
        db.close()
        console.info('Successfully initialized the database')
    } catch (error) {
        console.error(error)
    }
}

initDb();

