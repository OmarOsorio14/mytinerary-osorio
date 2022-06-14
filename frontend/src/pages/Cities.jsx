import React, {useEffect,useState} from "react";
import Card from "../components/Card";
import {data} from "../assets/data"
import Search from "../components/Search";
import Alert from "../components/Alert";

function Cities() {

	const [filterData, setFilterData] = useState([]);
	const [inputSearch, setInputSearch] = useState("");

	const handleSearch = (event)=>{
		setInputSearch(event)
	}

	useEffect(()=>{
		window.scrollTo(0, 0)
	})
	
	useEffect(()=>{
		setFilterData(data.filter((place) =>{
			return place.city.toLowerCase().startsWith(inputSearch.toLowerCase().trim())
		}))
	},[inputSearch])

  return (
		<>
			<Search handleSearch={handleSearch}/>
			{filterData.length !== 0 
			? (filterData.map((card,index)=> <Card key={index} city={card.city} country={card.country} image={card.image} continent={card.continent}  description={card.description}/>))
		 	: <Alert type="warning" title="this city was not found" message="At the moment we do not have this destination within our offer" />}
		</>
  );
}
export default Cities;