import React, {useEffect} from "react";
import Carousel from '../components/Carousel';
import Hero from "../components/Hero";

function Home() {

	useEffect(()=>{
		window.scrollTo(0, 0)
	})
  return (
		<>
		<div className="h-screen bg-cover bg-[url('../assets/home_background.jpg')] flex flex-col justify-center items-center">
			<Hero />
    </div>
		<Carousel title="Popular MyTineraries" />
		</>
  );
}

export default Home;