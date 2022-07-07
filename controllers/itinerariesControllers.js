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
		const {name,userName,userPicture,price,duration,hashtags, city} = req.body.data
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
	},
	addActivityToItinerary: async(req,res)=>{
		const idItinerary = req.params.id
		const idActivity = req.body.data.idActivity;
		let itinerary
		let itinerarydb
		let error = null
		try {
			itinerary = await Itinerary.findOne({_id: idItinerary})
			itinerary.activities = itinerary.activities.push(idActivity)
			itinerarydb = await Itinerary.findOneAndUpdate({_id:idItinerary},itinerary,{new: true})
		}catch (err) {
			error = err
			console.error(error)
		}
		res.json({
			response: error ? 'ERROR' : itinerarydb,
			success: error ? false : true,
			error: error
		})
	},
	giveLikeOrDislike: async(req,res)=>{
		const idItinerary = req.params.id
		const idUser = req.user.id
		let itinerary
		let itinerarydb
		let error = null
		try{
			itinerary = await Itinerary.findOne({_id: idItinerary})
			if(itinerary.likes.includes(idUser)){
				itinerarydb = await	Itinerary.findOneAndUpdate({ _id: idItinerary }, { $pull: { likes: idUser } }, { new: true })
			}else{
				itinerarydb = await Itinerary.findOneAndUpdate({ _id: idItinerary }, { $push: { likes: idUser } }, { new: true })
			}
		}catch (err) {error = err
		console.error(err)}
		res.json({
			response: error ? 'ERROR' : itinerarydb,
			success: error ? false : true,
			error: error
		})
	}
}
module.exports = itinerariesControllers