const initialState = {
	user: null,
	toast:{ message: '', success:false},
}

const userReducer = (state = initialState, action)=>{
	switch(action.type) {
		case 'logInUser':
			return {
				...state,
				user: action.payload
			}
			case 'message':
				return {
					...state,
					toast: action.payload
				}
		default:
			return state
	}
}
export default userReducer;