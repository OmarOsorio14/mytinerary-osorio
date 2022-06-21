import React, {useEffect} from "react";
import { connect } from "react-redux";
import Carousel from '../components/Carousel';
import Hero from "../components/Hero";
function Home(props) {
	
	useEffect(()=>{
		window.scrollTo(0, 0)
	})
  return (
		<>
		<div className="h-screen bg-cover bg-[url('../assets/home_background.jpg')] flex flex-col justify-center items-center">
			<Hero />
    </div>
		<Carousel title="Popular MyTineraries" data={props.cities}/>
		</>
  );
}
const mapStateToProps = (state) => {
	return {
		cities: state.cityReducer.cities
	}
}

export default connect(mapStateToProps,null)(Home);