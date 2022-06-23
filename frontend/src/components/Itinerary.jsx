import React, {useState} from 'react'

import {HeartIcon} from '@heroicons/react/outline'
import {ClockIcon} from '@heroicons/react/outline'
import bill from '../assets/bill.png'
import Carousel from './Carousel'


export default function Itinerary() {

	const [showMore, setShowMore] = useState(false);
	const activities = [{
		_id: 1,
		name: "activity 1",
		image: "https://img.itinari.com/pages/images/original/892b288f-f2dc-457d-bfe7-2adf4c7f1165-istock-484915982.jpg?ch=DPR&dpr=2.625&w=1600&s=d6f1b16c67328e6ddea4c67d5aee1cc8"
	},
	{
		_id: 2,
		name: "activity 2",
		image: "https://www.japonalternativo.com/wp-content/uploads/2020/05/Torre-de-Tokio-informaci%C3%B3n.jpg"
	},
	{
		_id: 3,
		name: "activity 3",
		image: "https://www.gotokyo.org/es/story/guide/helicopter/images/helicopter_1.jpg"
	}
]
	return (
		<div className="p-2 bg-white shadow-lg rounded-lg my-20">
			<div className="flex justify-center md:justify-end -mt-16">
				<img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" alt='user' src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
			</div>
			<div>
				<h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
				<div className="flex items-center justify-center mt-2">
					<p className='font-bold'>price: </p>
					<img src={bill} alt="bill" />
				</div>
			</div>
			<div className='flex items-center justify-center mt-2 flex-wrap'>
				<p className='ml-2 text-indigo-500'>#vidada</p>
				<p className='ml-2 text-indigo-500'>#vidada</p>
				<p className='ml-2 text-indigo-500'>#vidada</p>
				<p className='ml-2 text-indigo-500'>#vidada</p>
			</div>
			<div className="flex justify-end mt-4 justify-around">
				<p className="flex items-center justify-center"><HeartIcon className='w-6'/>   0 </p>
				<p className="flex items-center justify-center"><ClockIcon className='w-6'/>   5 min</p>
				
				<p className="text-xl font-medium text-indigo-500">John Doe</p>
			</div>
			<button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2" onClick={() => setShowMore(!showMore)}>
			{showMore ? "See Less" : "See More"}</button>
			{showMore ? <Carousel title="Activities" data={activities} load={1} /> : ""}
			

		</div>
	)
}
