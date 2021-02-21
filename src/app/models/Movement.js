const db = require('../../config/db')
const { date, formatAmount } = require('../../lib/tools')

module.exports = {
    allMovements() {
        return db.query(`SELECT * FROM financialmovements`)
    },
    create(data) { 
        const query = `
            INSERT INTO financialmovements (
                description,
                value,
                date
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
        const values = [
            data.description,
            formatAmount(data.amount),
            date(data.date).iso,
        ]

        return db.query(query, values)
    },

    update(data) {
        const query = `
            UPDATE financialmovements SET
                description = ($1),
                value = ($2),
                date = ($3)
            WHERE id = $4
        `
        const values = [
            data.description,
            formatAmount(data.amount),
            date(data.date).iso,
            data.id
        ]

        return db.query(query, values)
    },

    findMovement(id) {
        return db.query(`SELECT * FROM financialmovements WHERE id = $1`, [id])
    },

    delete(id) {
        return db.query(`DELETE FROM financialmovements WHERE id = $1`, [id])
    },

    filterOrNo(filter){

        let query = ""
        let filterQuery = ""

        if (filter) {
            filterQuery = ` WHERE financialmovements.description ILIKE '%${filter}%'`
        }
        
        query = `SELECT * FROM financialmovements ${filterQuery}`
        
        return db.query(query)
    }
}