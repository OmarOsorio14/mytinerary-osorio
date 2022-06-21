import {Route,Routes} from 'react-router-dom'
import React, {useEffect} from "react";

import Cities from './pages/Cities';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';
import Detail from './pages/Detail';
import Error from './pages/Error';
import cityActions from './redux/actions/cityActions';
import { connect } from 'react-redux';

function App(props) {
	useEffect(() => {
		props.fetchCities()
	})
  return (
    <div className="App flex flex-col min-h-screen">
			<Header/>
	
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/cities" element={<Cities/>} />
				<Route path="/detail/:id" element={<Detail/>} />
				<Route path="*" element={<Error/>} />
			</Routes>

			<Footer />
			
    </div>
  );
}
const mapDispatchToProps = {
	fetchCities: cityActions.fetchCities
}

export default connect(null, mapDispatchToProps)(App);