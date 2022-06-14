import React from 'react'
import { XCircleIcon } from '@heroicons/react/outline'

export default function SideBar({handleClose}) {
	return (
		<div className='h-screen w-screen flex absolute z-50'>
			<div className="h-screen w-full sm:w-1/4 bg-gray-900 overflow-auto">
				<button onClick={() => handleClose(false)} className="flex items-center pl-2 flex-wrap">
					<span className='text-indigo-500 font-bold'>come back to detail</span><XCircleIcon className='text-indigo-500 w-14 h-14'/>
				</button>
				<p className='text-white text-lg md:text-2xl font-bold my-2'>Available Itineraries for Cairo</p>
				<ol>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-indigo-800 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4 z-20"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					
				</ol>
			</div>
			<div className="h-screen w-0 sm:w-3/4 bg-black opacity-50 " onClick={() => handleClose(false)}></div>

		</div>
	)
}
