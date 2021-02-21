const Movement = require('../models/Movement')
const { date, formatValuesBRLv1 } = require('../../lib/tools')

module.exports = {
    async index(req, res) {
        let { filter } = req.query
        totals = {
            incomes: 0,
            expenses: 0,
            total: 0,
        }
        const results = await Movement.filterOrNo(filter)
        const movements = results.rows

        for (let movement of movements) {
            movement.date = date(movement.date).format
            movement.created_at = date(movement.created_at).format
            movement.value > 0 ? totals.incomes += movement.value : totals.expenses += movement.value
            movement.value = formatValuesBRLv1(movement.value)
        }
          totals.total = formatValuesBRLv1(totals.incomes + totals.expenses)
          totals.incomes = formatValuesBRLv1(totals.incomes)
          totals.expenses = formatValuesBRLv1(totals.expenses)

        return res.render('index', { movements, totals, filter })

    },

    create(req, res) {
        return res.render("create")
    },    
    
    async post(req, res) {
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all the fields!")
            }
        }

        const results = await Movement.create(req.body)
        const movement = results.rows[0]

        return res.redirect('/')
    },

    async edit(req, res) {
        const id = req.params.id

        const results = await Movement.findMovement(id)
        const movement = results.rows[0]

        movement.value = (movement.value / 100)
        movement.date = date(movement.date).iso

        return res.render("edit", { movement })
    },

    async put(req, res) {

        const keys = Object.keys(req.body);

        keys.forEach(key => {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!");
            }

        });

        await Movement.update(req.body)
        return res.redirect('/')
    },

    async delete(req, res) {
        await Movement.delete(req.body.delete)
        
        return res.redirect('/')
    }

}