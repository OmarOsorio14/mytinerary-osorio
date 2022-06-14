import React, {useEffect,useState} from "react";
import Carousel from '../components/Carousel';
import Hero from "../components/Hero";
import axios from 'axios';
function Home() {
	const [data, setData] = useState([]);
	
	useEffect(()=>{
		window.scrollTo(0, 0)
		axios.get('http://localhost:4000/api/cities')
      .then(res => setData(res.data.response.cities))
	},[])
  return (
		<>
		<div className="h-screen bg-cover bg-[url('../assets/home_background.jpg')] flex flex-col justify-center items-center">
			<Hero />
    </div>
		<Carousel title="Popular MyTineraries" data={data}/>
		</>
  );
}

export default Home;