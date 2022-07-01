import React, {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";
import toast from 'react-hot-toast';

export default function GoogleSignUp({country}) {
	const dispatch = useDispatch()

	async function handleCallbackResponse(response){
		if(country === ""){
			toast.error("you must select a country first");
		}else{
			console.log(response.credential)
			let userObject = jwt_decode(response.credential)
			console.log(userObject)
			dispatch(userActions.signUpUser({
				username: userObject.name,
				first_name: userObject.given_name,
				last_name: userObject.family_name,
				email: userObject.email,
				password: userObject.sub,
				country: country,
				photo: userObject.picture,
				from: "Google"
			}))
		}
	}
	useEffect(()=>{
		/* global google */
	
			google.accounts.id.initialize({
				client_id: process.env.REACT_APP_CLIENT_ID,
				callback: handleCallbackResponse
			})
	
			google.accounts.id.renderButton(
				document.getElementById('googleButton'),{theme: "outline", size: "medium"}
			)
		
	})

	return (
		<div id="googleButton"></div>
	)
}
