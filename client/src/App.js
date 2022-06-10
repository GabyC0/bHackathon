import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navigationbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
//import Events from './pages/events';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/review' element={<Review />} />
	</Routes>
	</Router>
);
}

export default App;

