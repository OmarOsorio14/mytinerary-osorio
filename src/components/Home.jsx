import Header from './Header';
import Footer from './Footer';

import '../styles/App.css';

function Home() {
  return (
		<>
		<div className="w-screen h-screen bg-cover bg-[url('../assets/fondo.jpg')]">
			<Header/>
			<div className='backdrop-blur-sm bg-white/30'>
				<h1 className='text-5xl md:text-8xl mb-3'>MyTinerary</h1>
				<p className='text-1xl md:text-4xl mb-3'>Find your perfect trip, designed by insiders who know and love their cities!</p>
				<button className="px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full shadow-xl text-cyan-100 bg-cyan-500 hover:bg-cyan-600 shadow-cyan-400/30 animate-bounce">Dare to discover</button>
			</div>
    </div>
		<Footer />
		</>
  );
}

export default Home;