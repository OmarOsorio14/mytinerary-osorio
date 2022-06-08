import React, {useEffect} from "react";
import Carousel from '../components/Carousel';
import {Link as LinkRouter} from "react-router-dom";

function Home() {

	useEffect(()=>{
		window.scrollTo(0, 0)
	})
  return (
		<>
		<div className="h-screen bg-cover bg-[url('../assets/home_background.jpg')] flex flex-col justify-center items-center">
			<div className='backdrop-blur-sm bg-amber-500/30 mx-10 md:mx-20 rounded-lg'>
				<h1 className='text-5xl md:text-8xl mb-3 font-bold'>MyTinerary</h1>
				<p className='text-1xl md:text-4xl mb-4'>Find your perfect trip, designed by insiders who know and love their cities!</p>
				<LinkRouter to="/cities" type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 animate-bounce">Dare to discover</LinkRouter>
			</div>
    </div>
		<Carousel title="Popular MyTineraries" />
		</>
  );
}

export default Home;