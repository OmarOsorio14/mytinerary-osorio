const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, addMultipleCity} = citiesControllers

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id') 
.delete(removeCity)
.put(modifyCity) 
.get(getOneCity)

Router.route('/addMultipleCity')
.post(addMultipleCity)

module.exports = Router