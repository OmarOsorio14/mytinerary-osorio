import axios from "axios";
import toast from 'react-hot-toast';

const userActions = {
		signUpUser: (userData)=>{
			return async(dispatch, getState) => {
				const res = await axios.post('http://localhost:4000/api/auth/signup', {userData})
				if(res.data.success){
					toast.success(res.data.message);
				}else{
					toast.error(res.data.message);
				}
			}
		},

		logInUser: (logedUser)=>{
			return async(dispatch, getState) => {
				const res = await axios.post('http://localhost:4000/api/auth/login', {logedUser})
				console.log(res)
				if(res.data.success){
					dispatch({ type: 'logInUser', payload: res.data.response.userData });
					toast.success(res.data.message);
					console.log(res)
				}else{
					toast.error(res.data.message);
					console.log(res)
				}
			}
		}
}
export default userActions