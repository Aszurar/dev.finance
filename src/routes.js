const express = require('express')
const routes = express.Router()
const movements = require('./app/controllers/movements')


routes.get('/', (req, res) => {
    return res.redirect('/devfinance')
})

routes.get('/devfinance', movements.index)
routes.get('/devfinance/create', movements.create)
routes.get('/devfinance/:id/edit', movements.edit)
routes.post('/devfinance', movements.post)
routes.put('/devfinance', movements.put)
routes.delete('/devfinance', movements.delete)

module.exports = routes