import React, {useEffect,useState} from "react";
import Card from "../components/Card";
import {data} from "../assets/data"
import Search from "../components/Search";

function Cities() {

	const [filterData, setFilterData] = useState([]);
	const [inputSearch, setInputSearch] = useState("");

	const handleSearch = (event)=>{
		setInputSearch(event)
	}

	useEffect(()=>{
		window.scrollTo(0, 0)
		console.log(inputSearch)
		setFilterData(data.filter((place) =>{
			console.log(place.city)
			return place.city.toLowerCase().includes(inputSearch.toLowerCase().trim())
		}))
	},[inputSearch])

  return (
		<>
			<Search handleSearch={handleSearch}/>
			{filterData.map((card,index)=> <Card key={index} city={card.city} country={card.country} image={card.image} continent={card.continent}  description={card.description}/>)}
		</>
  );
}
export default Cities;