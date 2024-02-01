import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"



const Dashboard = () => {

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('userData');
		navigate('/');
	};

	const storedUserData = JSON.parse(localStorage.getItem('userData'));

	return (
		<div>
			<Navbar />
		<div class="dashmenu">
			<h1>Witaj {storedUserData.name} {storedUserData.lname}!</h1>
			<button class='logout-button' onClick={handleLogout}>WYLOGUJ</button>
			 </div>
			<Footer />
		</div>
	);
	
};

export default Dashboard;
