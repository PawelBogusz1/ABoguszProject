import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";



const Dashboard = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 className='about-text' heading='O nas' text='WITAJ NA STRONIE  ' />
			
			<Footer />
		</div>
	);
};

export default Dashboard;
