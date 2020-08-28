"use strict";

var express = require('express');

var routes = express.Router();

var OngController = require('./Controllers/OngController');

var IncidentController = require('./Controllers/IncidentController');

var ProfileController = require('./Controllers/ProfileController');

var SessionController = require('./Controllers/SessionController');

routes.post('/sessions', SessionController.create);
routes.get('/', OngController.list);
routes.post('/', OngController.create);
routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes["delete"]('/incidents/:id', IncidentController.deletar);
routes.get('/profile', ProfileController.list);
module.exports = routes;