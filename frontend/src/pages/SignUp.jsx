import React, {useState,useEffect} from "react";
import {Link as LinkRouter} from "react-router-dom";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
import {useSelector, useDispatch} from 'react-redux'
import userActions from "../redux/actions/userActions";

export default function SignUp() {
	const dispatch = useDispatch()
	const [passwordVisible, setPasswordVisible] = useState("password");
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState("password");
	const [passwordValue, setPasswordValue] = useState("");
	const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
	const [match, setMatch] = useState(true);


	const countries = useSelector(store => store.countryReducer.countries)

	useEffect(()=>{
		passwordValue === confirmPasswordValue ? setMatch(true)	: setMatch(false)
	},[passwordValue,confirmPasswordValue])
	const handleSubmit = (event) =>{
		event.preventDefault()
		if(match){
			const userData = {
				username: event.target["username"].value,
				first_name: event.target["first_name"].value,
				last_name: event.target["last_name"].value,
				email: event.target["email"].value,
				password: event.target["password"].value,
				country: event.target["country"].value,
				photo: event.target["photo"].value,
				from: "form-signUp"
		}
		dispatch(userActions.signUpUser(userData))
	
		}
	}

	return (
		<form className="p-4 m-4 md:mx-40 md:my-20 bg-slate-50 text-left rounded-lg" onSubmit={handleSubmit}>
			<div className="relative z-0 w-full mb-6 group">
					<input type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
			</div>
			<div className="grid xl:grid-cols-2 xl:gap-6">
				<div className="relative z-0 w-full mb-6 group">
						<input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
				</div>
				<div className="relative z-0 w-full mb-6 group">
						<input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
						<label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
				</div>
  		</div>
			<div className="relative z-0 w-full mb-6 group">
					<input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
			</div>
			<div className="grid xl:grid-cols-2 xl:gap-6">
				<div className="relative z-0 w-full mb-6 group">
				<div className="relative">
						<input type={passwordVisible} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setPasswordValue(e.target.value)} />
						<label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
						{passwordVisible === "password"
						? <EyeOffIcon className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setPasswordVisible("text")}/> 
						: <EyeIcon  className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setPasswordVisible("password")}/>}
			</div>
				</div>
				<div className="relative z-0 w-full mb-6 group">
					<div className="relative">
						<input type={confirmPasswordVisible} name="confirm_password" id="confirm_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setConfirmPasswordValue(e.target.value)} style={{borderColor: match ? "#d1d5db" : "#fca5a5"}}/>
							<label htmlFor="confirm_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
							{confirmPasswordVisible === "password"
							? <EyeOffIcon className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setConfirmPasswordVisible("text")}/> 
							: <EyeIcon  className='w-7 absolute bottom-0 right-0 hover:cursor-pointer' onClick={() => setConfirmPasswordVisible("password")}/>}
					</div>
					{match ? "" : <p className="text-red-300">Passwords don't match</p>}
				</div>
			</div>
			<div className="relative z-0 w-full mb-6 group">
				<label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-500">Select your country</label>
				<select id="country" name="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
					{countries.map((country) => <option value={country} key={country}>{country}</option>)}
				</select>
			</div>
			<div className="relative z-0 w-full mb-6 group">
					<input type="text" name="photo" id="photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="photo" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo Url</label>
			</div>
			<button type="submit" className="mt-3 text-lg font-semibold bg-gray-800 mx-auto text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
        sign Up
      </button>
			<div className='flex items-center justify-center flex-wrap'>
				<div className="w-full flex items-center justify-center mb-2 flex-wrap">
					<p>do you already have an account created?</p>
					<LinkRouter to="/" className="ml-2 text-lg font-semibold text-teal-500 hover:text-teal-700 hover:border-b-2 hover:border-teal-700 ">
					Log In
				</LinkRouter>
				</div>
				<button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
					<svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
					Sign in with Facebook
				</button>
				<button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
					<svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
					Sign in with Google
				</button>
			</div>	
		</form>
	)
}
