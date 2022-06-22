import React, {useEffect,useState} from 'react'
import SideBar from '../components/SideBar'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { useParams } from 'react-router-dom'
import cityActions from '../redux/actions/cityActions';
import {useDispatch,useSelector} from 'react-redux'
import Itinerary from '../components/Itinerary';


function Detail() {
	const {id} = useParams()
	const dispatch = useDispatch()


	const [showSideBar, setShowSideBar] = useState(false);


	useEffect(()=>{
		window.scrollTo(0, 0)
	},[])

	useEffect(()=>{
		dispatch(cityActions.getOneCity(id));
	})
	const city = useSelector(store => store.cityReducer.oneCity)
	

	const handleClose = (event)=>{
		setShowSideBar(event)
	}
	return (
			<>
				<img className="w-full max-h-52 object-cover overflow-hidden h-52 shadow-lg shadow-lime-500/50" src={city.image} alt="" />
				<div className="mx-0 md:mx-16 my-4 p-4">
					<p className=' text-5xl mb-2 text-left font-bold'>{city.name}</p>
					<p className=' text-3xl mb-2 text-left font-bold'>Description</p>
					<p className=' text-left'>{city.description}</p>
					<Itinerary/>
				</div>
				<button className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 max-w-max max-h-max fixed inset-y-1/2 rounded animate-pulse" onClick={()=>{handleClose(!showSideBar)}}>
  				<ArrowRightIcon className='md:h-8 md:w-8 h-4 w-4' />
				</button>
				{showSideBar ? 	<SideBar handleClose={handleClose} city={city.name}/> : ""}
			</>
	)
}
export default Detail;