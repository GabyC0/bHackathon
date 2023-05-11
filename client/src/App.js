import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navigationbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Review from './Pages/Review';
import Search from './Pages/Search';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/review' element={<Review />} />
    <Route path='/search' element={<Search />} />
	</Routes>
	</Router>
);
}

export default App;

