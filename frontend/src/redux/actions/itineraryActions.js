import axios from "axios";

const itineraryActions = {
		getItineraries: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get('http://localhost:4000/api/itineraries')
				dispatch({type:'getItineraries', payload:res.data.response.itineraries})
			}
		},
}
export default itineraryActions