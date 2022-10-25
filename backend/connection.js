const Pool = require('pg').Pool;


//pool object
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "orqual",
    password: "eudoxie",
    port: 5432,
});

//export pool
module.exports = pool;