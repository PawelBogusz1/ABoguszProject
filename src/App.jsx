// import { useState } from 'react'
// import "./App.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Opinie from "./routes/Opinie";
import {Route, Routes} from "react-router-dom";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Dashboard from "./routes/Dashboard";


const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/opinie' element={<Opinie />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/dashboard' element={<Dashboard />} />

				
			</Routes>
		</>
	);
}

export default App;
