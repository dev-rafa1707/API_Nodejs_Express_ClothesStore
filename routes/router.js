const express = require('express')
const controlle = require('./controllers/controller')
const controller = require('../../exercicio3/controllers/controller')

const routes = express.Router()

routes.get('/', controller.getAll)
routes.get('/:id', controller.getById)
routes.post('/', controller.create)
routes.put('/:id',controller.update)
routes.delete('/:id', controller.delete)


module.exports = routes