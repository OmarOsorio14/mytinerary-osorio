const Activity = require('../models/activity')

const activitiesControllers = {
	getActivities: async(req,res)=>{
		let activities;
		let error = null
		try {
			activities = await Activity.find()
		} catch (err) {error = err}
		res.json({
			response: error ? 'ERROR' : {activities},
			success: error ? false : true,
			error: error
		})
	},

	addActivity: async(req,res)=>{
		const {name, image} = req.body.data
		let activity
		let error = null
		try{
			activity = await new Activity({
				name:name,
				image:image
			}).save()
		}catch(err){error = err}
		res.json({
			response: error ? 'ERROR' : activity,
			success: error ? false : true,
			error: error
		})
	}
}
module.exports = activitiesControllers