import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Form from "../components/Form"

const Contact = () => {
	return (
		<div>
			<Navbar />
      <HeroImg2 heading="KONTAKT" text="Jeśli masz uwagi na temat naszej strony lub biblioteki skontaktuj się z nami uzywając poniżeszego formularza"/>
	  <Form/>
			<Footer />
		</div>
	);
};

export default Contact;
