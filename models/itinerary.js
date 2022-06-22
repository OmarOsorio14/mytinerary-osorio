const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
	name: {type: String, required: true},
	userName: {type: String, required: true},
	userPicture: {type: String, required: true},
	price: {type: Number, default: 0},
	duration: {type: String, required: true},
	hashtags: {type: Array, required: true},
	likes: {type: Number, default: 0},
	activities: {type: Array, required: true},
	city: {type: mongoose.Types.ObjectId, ref:"cities", required: true},	
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary