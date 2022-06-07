import React,{useEffect} from 'react'

export default function Error() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	})

	return (
		<div className="h-screen bg-rose-300 flex flex-col justify-center items-center">
		<p className="text-7xl font-bold">Error 404 this resource doesn't exist yet</p>
	</div>
	)
}
