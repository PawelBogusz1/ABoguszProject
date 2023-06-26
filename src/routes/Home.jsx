import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer";
import Work from "../components/Work"
import Technologies from "../components/Technologies"
// import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroImg/>
			<Work/>
			<Technologies />
			<Footer/>
  
		</div>
	);
};

export default Home;
