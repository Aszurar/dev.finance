const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')
const routes = require('./routes')

server.use(express.static('public'))
server.set('view engine', 'njk')
server.use(express.urlencoded({extended: true}))
server.use(methodOverride('_method'))
server.use(routes)

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5123, function(){
    console.log('Server is running!')
})