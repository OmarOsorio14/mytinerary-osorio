const Itinerary = require('../models/itinerary')

const commentsControllers = {
	AddComment: async(req,res)=>{
		const {idItinerary, message} = req.body.data
		const user = req.user.id
		let error = null
		try{
			const newComment = await Itinerary.findOneAndUpdate({_id:idItinerary}, {$push: {comments: {comment: message, userId: user, date: Date.now()}}}, {new: true})
			res.json({
				response: error ? 'ERROR' : newComment,
				success: error ? false : true,
				error: error
		})	
		}catch (err) {error = err
		console.error(err)}
	
	},
	UpdateComment: async(req,res)=>{
		const {idComment,message} = req.body.data
		try {
				const newComment = await Itinerary.findOneAndUpdate({"comments._id":idComment}, {$set: {"comments.$.comment": message,"comments.$.date": Date.now() }}, {new: true})
				res.json({ success: true, response:{newComment}, message:"comment updated successfully" })
	
		}
		catch (error) {
				console.log(error)
				res.json({ success: true, message: "something went wrong try again later" })
		}
	
	},
	DeleteComment: async(req,res)=>{
		const idComment = req.params.id
		let error = null
		try{
			const deleteComment = await Itinerary.findOneAndUpdate({"comments._id":idComment}, {$pull: {comments: {_id: idComment}}}, {new: true})
			res.json({
				response: error ? 'ERROR' : deleteComment,
				success: true,
				error: error
			})
			}
		catch (err) {error = err
		console.error(err)}
		
	},
}
module.exports = commentsControllers