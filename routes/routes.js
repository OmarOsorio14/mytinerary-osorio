const Router = require('express').Router();
const validator 	= require('../config/validator')
const passport = require('../config/passsport');
const citiesControllers = require('../controllers/citiesControllers');
const {getCities, getOneCity, addCity, modifyCity, removeCity, addMultipleCity,addItineraryToCity} = citiesControllers

const itinerariesControllers = require('../controllers/itinerariesControllers');
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, addActivityToItinerary,giveLike} = itinerariesControllers

const usersControllers = require('../controllers/usersControllers');
const {signUp, logIn, verifyMail, verifyToken} = usersControllers

const activitiesControllers = require('../controllers/ActivitiesControllers');
const {getActivities, addActivity} = activitiesControllers

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id') 
.delete(removeCity)
.put(modifyCity) 
.get(getOneCity)

Router.route('/cities/newitinerary/:id').put(addItineraryToCity)
Router.route('/cities/newactivity/:id').put(addActivityToItinerary)


Router.route('/addMultipleCity')
.post(addMultipleCity)

Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/like')
.post(giveLike)

Router.route('/itineraries/:id') 
.delete(removeItinerary)
.put(modifyItinerary) 
.get(getOneItinerary)

Router.route('/auth/signup') 
.post(validator,signUp)

Router.route('/auth/login') 
.post(logIn)

Router.route('/verify/:string') 
.get(verifyMail)

Router.route('/auth/loginToken')
.get(passport.authenticate('jwt',{session:false}), verifyToken)

Router.route('/activities') 
.get(getActivities)
.post(addActivity)

module.exports = Router