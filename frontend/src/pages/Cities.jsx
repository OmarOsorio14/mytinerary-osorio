import React, {useEffect,useState} from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import Alert from "../components/Alert";
import { connect } from "react-redux";
import cityActions from "../redux/actions/cityActions";


function Cities(props) {
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		window.scrollTo(0, 0)
		if(props.cities.length !== 0 ){
			setLoading(false)
		}else{
			setLoading(true)
		}
	},[props.cities.length])

	const handleSearch = (event)=>{
		props.filterCities(props.cities,event)
	}
		return (
			<>
				<Search handleSearch={handleSearch}/>
				{props.filter.length !== 0 
				? (props.filter.map((card)=> <Card key={card._id} id={card._id} name={card.name} country={card.country} image={card.image} continent={card.continent}  description={card.description}/>))
				:loading ? "": <Alert type="warning" title="this city was not found" message="At the moment we do not have this destination within our offer" />}
				
			</>
		);
	}

	const mapStateToProps = (state) => {
		return {
			cities: state.cityReducer.cities,
			filter: state.cityReducer.filter
		}
	}
	const mapDispatchToProps = {
		filterCities: cityActions.filterCities
	}
	
	export default connect(mapStateToProps,mapDispatchToProps)(Cities);