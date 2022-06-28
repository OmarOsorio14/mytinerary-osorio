const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, addMultipleCity,addItineraryToCity} = citiesControllers

const itinerariesControllers = require('../controllers/itinerariesControllers');
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary} = itinerariesControllers

const usersControllers = require('../controllers/usersControllers');
const {signUp, logIn} = usersControllers

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id') 
.delete(removeCity)
.put(modifyCity) 
.get(getOneCity)

Router.route('/cities/newitinerary/:id').put(addItineraryToCity)

Router.route('/addMultipleCity')
.post(addMultipleCity)

Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/:id') 
.delete(removeItinerary)
.put(modifyItinerary) 
.get(getOneItinerary)

Router.route('/auth/signup') 
.post(signUp)

Router.route('/auth/login') 
.post(logIn)

module.exports = Router