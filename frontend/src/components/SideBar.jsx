import React from 'react'
import { XCircleIcon } from '@heroicons/react/outline'

export default function SideBar({handleClose,city}) {
	return (
		<div className='min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none'>
			<div className="h-screen w-full sm:w-1/4 bg-gray-900 overflow-auto">
				<div className="sticky top-0 bg-gray-900">
					<button onClick={() => handleClose(false)} cla>
						<XCircleIcon className='text-indigo-400 w-14 h-14'/>
					</button>
					<p className='text-white text-lg md:text-2xl font-bold my-2'>Available Itineraries for {city}</p>
				</div>
				<ol>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					<li className='text-white  p-2 text-left flex items-center mb-2 hover:bg-gray-700 hover:cursor-pointer '><img src="https://tuk-cdn.s3.amazonaws.com/assets/components/testimonials/t_1.png" alt="card" className="min-h-8 min-w-8 mr-1 object-cover overflow-hidden rounded-full border-4"/><span className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, natus.</span></li>
					
				</ol>
			</div>
			<div className="h-screen w-0 sm:w-3/4 bg-black opacity-50 hover:overflow-hidden" onClick={() => handleClose(false)}></div>

		</div>
	)
}
