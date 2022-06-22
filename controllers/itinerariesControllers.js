const Itinerary = require('../models/itinerary')

const itinerariesControllers = {
	getItineraries: async(req,res)=>{
		let itineraries;
		let error = null
		try {
			itineraries = await Itinerary.find()
		} catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : {itineraries},
			success: error ? false : true,
			error: error
		})
	},
	getOneItinerary: async(req,res)=>{
		const id = req.params.id
		let itinerary
		let error = null
		try {
			itinerary = await Itinerary.findOne({_id: id})
		}catch (err) {
			error = err
			console.error(error)
		}
		res.json({
			response: error ? 'ERROR' : itinerary,
			success: error ? false : true,
			error: error
		})

	},
	addItinerary: async(req,res)=>{
		const {name,userName,userPicture,price,duration,hashtags,likes,activities, city} = req.body.data
		let itinerary
		let error = null
		try{
			itinerary = await new Itinerary({
				name:name,
				userName:userName,
				userPicture:userPicture,
				price:price,
				duration:duration,
				hashtags:hashtags,
				likes:likes,
				activities:activities,
				city:city,
			}).save()
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : itinerary,
			success: error ? false : true,
			error: error
		})

	},
	modifyItinerary: async(req,res)=>{
		const id = req.params.id
		const itinerary = req.body.data
		let itinerarydb
		let error = null
		try{
			itinerarydb = await Itinerary.findOneAndUpdate({_id:id},itinerary,{new: true})
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : itinerarydb,
			success: error ? false : true,
			error: error
		})
	},
	removeItinerary: async(req,res)=>{
		const id = req.params.id
		let itinerary
		let error = null
		try{
			itinerary = await Itinerary.findOneAndDelete({_id: id})
		}catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : itinerary,
			success: error ? false : true,
			error: error
		})
	}
}
module.exports = itinerariesControllers