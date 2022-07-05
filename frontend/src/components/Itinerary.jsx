import React, {useState} from 'react'

import {HeartIcon} from '@heroicons/react/outline'
import {ClockIcon} from '@heroicons/react/outline'
import bill from '../assets/bill.png'
import Carousel from './Carousel'
import Alert from './Alert'


export default function Itinerary({itinerary}) {
	console.log(itinerary)

	const [showMore, setShowMore] = useState(false);
	
let price = [];
  for (let i = 0; i < itinerary.price; i++) {
    price.push( <img key={i} src={bill} alt="bill" />);
  }
	return (
		<div className="p-2 bg-white shadow-lg rounded-lg my-20">
			<div className="flex justify-center md:justify-end -mt-16">
				<img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt='user' src={itinerary.userPicture} />
			</div>
			<div>
				<h2 className="text-gray-800 text-3xl font-semibold">{itinerary.name}</h2>
				<div className="flex items-center justify-center mt-2">
					<p className='font-bold'>price: </p>
					<div className="flex flex-wrap">{price}</div>
				</div>
			</div>
			<div className='flex items-center justify-center mt-2 flex-wrap'>
				{itinerary.hashtags.map((element,index) => <p key={index} className='ml-2 text-indigo-500'>{element}</p>)}
			</div>
			<div className="flex justify-end mt-4 justify-around">
				<p className="flex items-center justify-center"><button><HeartIcon className='w-6'/></button>{itinerary.likes.length}</p>
				<p className="flex items-center justify-center"><ClockIcon className='w-6'/>{itinerary.duration}</p>
				<p className="text-xl font-medium text-indigo-500">{itinerary.userName}</p>
			</div>
			<button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2" onClick={() => setShowMore(!showMore)}>
			{showMore ? "See Less" : "See More"}</button>
			{showMore ? (itinerary.activities.length !== 0 ? 
			<Carousel title="Activities" data={itinerary.activities} load={1} redirection={false}/> 
			: <Alert type="info" title="this itinerary doesn't have activities yet" message="At the moment we do not have any activity available for this itinerary, we are still preparing them for you to live the best experiences"/>): ""}
			

		</div>
	)
}
