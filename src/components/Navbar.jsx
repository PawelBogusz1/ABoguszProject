import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

import React, { useState } from "react";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [color, setColor] = useState(false)

	const handleClick = () => setClick(!click);
	const changeColor = () => {
		if (window.scrollY >=100){
			setColor(true)
		}else {
			setColor(false)
		}
	}
	
	window.addEventListener("scroll", changeColor)

	return (
		<div className={color ? "header header-bg" : "header"}>
			<Link to='/'>
				<h1>Biblioteka</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to='/'>Strona główna</Link>
				</li>
				<li>
					<Link to='/opinie'>Opinie</Link>
				</li>
				<li>
					<Link to='/about'>O nas</Link>
				</li>
				<li>
					<Link to='/contact'>Kontakt</Link>
				</li>
				<li>
				<Link to='/login'>
              <img src="./public/minion.png" class="user-icon" width="34" height="34">
                          </img></Link>
            
				</li>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
};

export default Navbar;
