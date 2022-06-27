import axios from "axios";
import toast from 'react-hot-toast';

const userActions = {
		signUpUser: (userData)=>{
			return async(dispatch, getState) => {
				const res = await axios.post('http://localhost:4000/api/user', {userData})
				if(res.data.success){
					toast.success(res.data.message);
				}else{
					toast.error(res.data.message);
				}
			}
		},
}
export default userActions