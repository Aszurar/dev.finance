const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgres",
    password: "nichi",
    host: "localhost",
    port: 5432,
    database: "devfinance"
})