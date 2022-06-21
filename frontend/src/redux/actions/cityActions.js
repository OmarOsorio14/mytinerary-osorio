import axios from "axios";

const cityActions = {
		fetchCities: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get('http://localhost:4000/api/cities')
				dispatch({type:'getCities', payload:res.data.response.cities})
			}
		},
		filterCities: (cities,value)=>{
			return (dispatch, getState) => {
				dispatch({type:'filter', payload:{cities,value}})
			}
		},
		getOneCity: (id)=>{
			return async(dispatch, getState) => {
				try {
					const res = await axios.get(`http://localhost:4000/api/cities/${id}`)
					dispatch({type:'oneCity', payload:res.data.response})
			}catch (err) {
					console.log(err)
			}
			}
		}
}
export default cityActions