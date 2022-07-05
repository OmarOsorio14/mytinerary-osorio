import axios from "axios";
import toast from 'react-hot-toast';


const itineraryActions = {
		getItineraries: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get('http://localhost:4000/api/itineraries')
				dispatch({type:'getItineraries', payload:res.data.response.itineraries})
			}
		},
		giveLike: (data)=>{
			return async(dispatch, getState) => {
				if(data==="not logged"){
					toast.error("for this action you must be logged in first")
				}else{
				const res = await axios.post('http://localhost:4000/api/itineraries/like', {data})
				}
				
				
			}
		}
}
export default itineraryActions