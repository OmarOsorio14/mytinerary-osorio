import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "../styles/arrow.css"

export default function Carousel({title}) {
	let data = [{
		city: "Tokyo",
		country: "Japan",
		image: "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "London",
		country: "United Kingdom",
		image: "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Barcelona",
		country: "Spain",
		image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Dublin",
		country: "Ireland",
		image: "https://images.pexels.com/photos/3566187/pexels-photo-3566187.jpeg", 
	},
	{
		city: "Reykjavik",
		country: "Iceland",
		image: "https://images.pexels.com/photos/6675921/pexels-photo-6675921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Paris",
		country: "France",
		image: "https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Medellin",
		country: "Colombia",
		image: "https://images.pexels.com/photos/4150032/pexels-photo-4150032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Cancún",
		country: "Mexico",
		image: "https://images.pexels.com/photos/9424954/pexels-photo-9424954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Seoul",
		country: "South Korea",
		image: "https://images.pexels.com/photos/2376713/pexels-photo-2376713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Cairo",
		country: "Egypt",
		image: "https://images.pexels.com/photos/10586819/pexels-photo-10586819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "Sidney",
		country: "Australia",
		image: "https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
	{
		city: "New York",
		country: "United States",
		image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
	},
]
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
		<div className="px-14 pb-14 bg-amber-100">
			<h2 className="text-4xl md:text-7xl font-bold py-6">{title}</h2>
			<Slider {...settings} className="px-4">
				{data.map((card,index)=> <Card key={index} city={card.city} country={card.country} image={card.image}/>)}
    	</Slider>
		</div>
    
  );
}