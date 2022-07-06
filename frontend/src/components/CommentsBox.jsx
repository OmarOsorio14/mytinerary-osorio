import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions'


export default function CommentsBox({id, comments}) {
	const dispatch = useDispatch()
	const user = useSelector(store => store.userReducer.user)
	const handleSubmit =(event)=>{
		event.preventDefault()
		if(user){
			dispatch(itineraryActions.AddComment({
				idItinerary: id,
				userId: user.id,
				message: event.target["message"].value
			}))
		}else{
			dispatch(itineraryActions.AddComment("not logged"))
		}
	}
	return (
		<div>
			<div class="p-1 bg-gray-200 rounded-lg max-h-[80vh] overflow-y-scroll">
			{comments.map(comment =>{
				if(user===null ||comment.userId._id !==user.id ){

					return(<div class="flex items-end mb-6">
									<div class="flex flex-col space-y-2 text-xs mx-2 order-2 items-start text-left bg-white rounded-lg rounded-bl-none">
										<p className='p-2 text-teal-600 font-bold'>{comment.userId.first_name}</p>
										<div><span class="px-2 pb-2 inline-block ">{comment.comment}</span></div>
									</div>
									<img src={comment.userId.photo} alt="My profile" class="w-10 h-10 rounded-full order-1" />
	 							</div>)
				}else{
					return(<div class="flex place-content-end mb-6">
									<div class="flex flex-col space-y-2 text-xs mx-2">
										<div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-teal-300">{comment.comment}</span></div>
									</div>
		 						</div>)
				}
			} 
			)}
			

			<form className='flex w-full' onSubmit={handleSubmit}>
    		<label for="message" class="sr-only">Your message</label>
 				<textarea id="message" name="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
				placeholder={user === null ? "You must be logged in first" : "Your message..."} disabled={user === null}></textarea>
        <button type="submit" class="inline-flex justify-center p-2 text-blue-600 cursor-pointer hover:bg-blue-100">
            <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </button>
			</form>
    </div>
</div>
	)
}
