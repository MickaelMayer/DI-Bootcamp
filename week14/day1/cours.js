const knex = require('knex')

const db = knex({
    client:'pg',
    connection:{
        host:'localhost',
        port:5432,
        user:'postgres',
        database:'postgres',
        password:'123456',
        ssl:{rejectUnauthorized: false}  
    }
})

async function getVersion() {
    const result = await db.raw('select version()')
    console.log(result.rows);  
} 

getVersion()