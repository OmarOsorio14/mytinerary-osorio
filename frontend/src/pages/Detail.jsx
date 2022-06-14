import React, {useEffect,useState} from 'react'
import SideBar from '../components/SideBar'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Detail() {
	const {id} = useParams()
	const [data, setData] = useState({});

	const [showSideBar, setShowSideBar] = useState(false);


	useEffect(()=>{
		window.scrollTo(0, 0)
		axios.get(`http://localhost:4000/api/cities/${id}`)
		.then(res => setData(res.data.response))
	},[id])

	const handleClose = (event)=>{
		setShowSideBar(event)
	}

	
	return (
			<>
				<div className="bg-no-repeat bg-center bg-gray-900 w-full h-52 rounded-b-[40px]" style={{backgroundImage: `url(${data.image})` }} >
				</div>
				
				<div className="mx-0 md:mx-16 my-4 bg-gray-900 p-4">
					<p className='text-indigo-300 text-5xl mb-2 text-left font-bold'>{data.name}</p>
					<p className='text-indigo-300 text-3xl mb-2 text-left font-bold'>Description</p>
					<p className='text-indigo-200 text-left'>{data.description}</p>
				</div>
				
				<button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 max-w-max max-h-max fixed inset-y-1/2 rounded animate-pulse" onClick={()=>{handleClose(!showSideBar)}}>
  				<ArrowRightIcon className='md:h-8 md:w-8 h-4 w-4' />
				</button>
				{showSideBar ? 	<SideBar handleClose={handleClose}/> : ""}
			</>
	)
}
