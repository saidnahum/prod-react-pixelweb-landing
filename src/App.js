import './App.css';
import Clients from './components/Clients';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<div className="bg-gray-800 h-full overflow-hidden">
			<Navbar/>
			<Hero/>
			<Clients/>
			<Plans/>
			<Highlights/>
			<Testimonials/>
		</div>
	);
}

export default App;
