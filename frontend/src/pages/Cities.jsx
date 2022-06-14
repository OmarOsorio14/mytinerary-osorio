import React, {useEffect,useState} from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import Alert from "../components/Alert";
import axios from 'axios';

function Cities() {

	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [inputSearch, setInputSearch] = useState("");

	const handleSearch = (event)=>{
		setInputSearch(event)
	}

	useEffect(()=>{
		window.scrollTo(0, 0)
		axios.get('http://localhost:4000/api/cities')
      .then(res => setData(res.data.response.cities))
	},[])
	
	useEffect(()=>{
		setFilterData(data.filter((place) =>{
			return place.name.toLowerCase().startsWith(inputSearch.toLowerCase().trim())
		}))
	},[inputSearch,data])

  return (
		<>
			<Search handleSearch={handleSearch}/>
			{filterData.length !== 0 
			? (filterData.map((card)=> <Card key={card._id} id={card._id} name={card.name} country={card.country} image={card.image} continent={card.continent}  description={card.description}/>))
		 	: <Alert type="warning" title="this city was not found" message="At the moment we do not have this destination within our offer" />}
		</>
  );
}
export default Cities;