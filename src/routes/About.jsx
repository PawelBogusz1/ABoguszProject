import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import "../components/About.css";


const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 className='about-text' heading='O nas' text='Biblioteka szkolna  znajduje się na parterze Zespołu Szkół Łączności. Jest  interdyscyplinarną pracownią szkolną, realizującą funkcję kształcąco – wychowawczą poprzez kształcenie kultury czytelniczej oraz przygotowanie uczniów do samokształcenia. W naszej bibliotece znajduje się wiele interesujących książek. W czytelni skorzystać można z bogatego księgozbioru podręcznego.  ' />
			
			<Footer />
		</div>
	);
};

export default About;
