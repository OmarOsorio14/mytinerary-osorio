import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderElement from "./SliderElement";
import "../styles/Carousel.css"
import {data} from "../assets/data"

export default function Carousel({title}) {
	
  var settings = {
		autoplay: true,
		//variableWidth: true,
		autoplaySpeed: 5000,
    dots: true,
		arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
		rows: 2
  };
  return (
		<div className="px-4 pb-14">
			<h2 className="text-4xl md:text-7xl font-bold text-slate-200 py-6">{title}</h2>
			<Slider {...settings} className="px-6 pb-8">
				{data.map((card,index)=> <SliderElement key={index} city={card.city} country={card.country} image={card.image}/>)}
    	</Slider>
		</div>
    
  );
}