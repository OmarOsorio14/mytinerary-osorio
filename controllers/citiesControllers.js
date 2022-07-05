const City = require('../models/city')

const citiesControllers = {
	getCities: async(req,res)=>{
		let cities
		let error = null
		try {
			cities = await City.find().populate("itineraries")
		} catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : {cities},
			success: error ? false : true,
			error: error
		})
	},
	getOneCity: async(req,res)=>{
		const id = req.params.id
		let city
		let error = null
		try {
			city = await City.findOne({_id: id}).populate({
																										path: 'itineraries',
																										populate: { path: 'activities' }
		 																							});
		}catch (err) {
			error = err
			console.error(error)
		}
		res.json({
			response: error ? 'ERROR' : city,
			success: error ? false : true,
			error: error
		})

	},
	addCity: async(req,res)=>{
		const {name,country,continent,description,image} = req.body.data
		let city
		let error = null
		try{
			city = await new City({
				name:name,
				country:country,
				continent:continent,
				description:description,
				image:image
			}).save()
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : city,
			success: error ? false : true,
			error: error
		})

	},
	modifyCity: async(req,res)=>{
		const id = req.params.id
		const city = req.body.data
		let citydb
		let error = null
		try{
			citydb = await City.findOneAndUpdate({_id:id},city,{new: true})
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : citydb,
			success: error ? false : true,
			error: error
		})
	},
	removeCity: async(req,res)=>{
		const id = req.params.id
		let city
		let error = null
		try{
			city = await City.findOneAndDelete({_id: id})
		}catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : city,
			success: error ? false : true,
			error: error
		})

	},
	addMultipleCity: async (req, res) => {
		const data = req.body.data
		let error = null
		try {
			data.map(async(item)=>{
			await new City({
						name: item.name,
						country: item.country,
						description: item.description,
						image: item.image,
						continent: item.continent,
				}).save()
			}) 
		} catch (err) { error = err }
		res.json({
				success: error ? false : true,
				error: error
		})
},
addItineraryToCity: async(req,res)=>{
	const idCity = req.params.id
	const idItinerary = req.body.data.idItinerary;
	let city
	let citydb
	let error = null
	try {
		city = await City.findOne({_id: idCity})
		city.itineraries = city.itineraries.push(idItinerary)
		citydb = await City.findOneAndUpdate({_id:idCity},city,{new: true})
	}catch (err) {
		error = err
		console.error(error)
	}
	res.json({
		response: error ? 'ERROR' : citydb,
		success: error ? false : true,
		error: error
	})
}

}
module.exports = citiesControllers