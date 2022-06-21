const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
	name: {type: String, required: true},
	userName: {type: String, required: true},
	userPicture: {type: String, required: true},
	price: {type: String, required: true},
	duration: {type: String, required: true},
	hashtags: {type: Array, required: true},
	likes: {type: Number, required: true},
	activities: {type: Array, required: true},
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary