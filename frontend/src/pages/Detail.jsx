import React, {useEffect,useState} from 'react'
import SideBar from '../components/SideBar'
import { ArrowRightIcon } from '@heroicons/react/outline'

//import { useParams } from 'react-router-dom'

export default function Detail() {

	const [showSideBar, setShowSideBar] = useState(false);


	useEffect(()=>{
		window.scrollTo(0, 0)
	})

	const handleClose = (event)=>{
		setShowSideBar(event)
	}

	//const {id} = useParams()
	return (
			<>
				<div className="shadow-md relative">
					<img className="w-full max-h-52 object-cover overflow-hidden" src="https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg" alt="" />
					<div className="md:p-2 p-0 absolute bottom-0 left-0 bg-lime-800/40 w-full max-h-full rounded">
						<h5 className="mb-0.5 md:mb-1 text-xs md:text-2xl font-bold tracking-tight text-center text-white">Dublin</h5> 
						<p className="mb-0.5 md:mb-1 text-xs md:text-lg text-white text-center">Ireland</p>
					</div>
				</div>
				
				<button class="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 max-w-max max-h-max fixed inset-y-1/2 rounded animate-pulse" onClick={()=>{handleClose(!showSideBar)}}>
  				<ArrowRightIcon className='h-8 w-8' />
				</button>
				{showSideBar ? 	<SideBar handleClose={handleClose}/> : ""}
			</>
	)
}
