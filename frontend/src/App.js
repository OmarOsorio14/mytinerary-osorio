import {Route,Routes} from 'react-router-dom'
import React, {useEffect} from "react";
import { Toaster } from 'react-hot-toast';
import Cities from './pages/Cities';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';
import Detail from './pages/Detail';
import Error from './pages/Error';
import {useDispatch} from 'react-redux'
import cityActions from './redux/actions/cityActions';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import countryActions from './redux/actions/countryActions';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(cityActions.getCities())
		dispatch(countryActions.getCountries())
	})
  return (
    <div className="App flex flex-col min-h-screen">
			<Header/>
	
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/cities" element={<Cities/>} />
				<Route path="/detail/:id" element={<Detail/>} />
				<Route path="/login" element={<LogIn/>} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="*" element={<Error/>} />
			</Routes>
			<Toaster/>
			<Footer />
			
    </div>
  );
}
export default App;