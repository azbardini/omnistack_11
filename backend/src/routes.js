const express = require('express');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/index', (req, res) => {
  // const params = req.query;
  // const params = req.params;
  // const body = req.body;
  return res.json({
    event: 'Omnistack',
    aluno: 'Bardini'
  });
});

routes.post('/ngo', NgoController.create);
routes.get('/ngo', NgoController.list)
routes.get('/delNgo', NgoController.remove)

routes.post('/incident', IncidentController.create);
routes.get('/incident', IncidentController.list)
routes.delete('/incident/:id', IncidentController.remove)
routes.get('/delincident', IncidentController.removeAll)

routes.get('/profile', ProfileController.list)

routes.post('/session', SessionController.create);

module.exports = routes;

/*
Methods:
GET: Find/Search info
POST: Create info
PUT: Update info
DELETE: Delete info
*/

/*
Parameter types:
QUERY params: Parameters send in route (filters, pagination) after ?  | '/test/'
route PARAMS: Parameters used to identify resources                   | '/test/:id'
request body: Body of requesr, create or update resources
*/
