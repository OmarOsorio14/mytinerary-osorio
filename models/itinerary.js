const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
	name: {type: String, required: true},
	userName: {type: String, required: true},
	userPicture: {type: String, required: true},
	price: {type: Number, max: 5, required: true},
	duration: {type: String, required: true},
	hashtags: {type: Array, required: true},
	likes: [{type: mongoose.Types.ObjectId, ref:"users"}],
	activities: [{type: mongoose.Types.ObjectId, ref:"activities"}],
	city: {type: mongoose.Types.ObjectId, ref:"cities", required: true},
	comments: [{
		comment: {type: String},
		userId: {type:mongoose.Types.ObjectId, ref:'users'}
}]
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary