import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {

	useEffect(()=>{
		window.scrollTo(0, 0)
	})

	const {id} = useParams()
	return (
		<div className="h-screen bg-lime-300 flex flex-col justify-center items-center">
			<p className="text-7xl font-bold">the detail of {id} are still in progress</p>
		</div>
	)
}
