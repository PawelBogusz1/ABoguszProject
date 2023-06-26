import "./TechnologiesStyle.css";
import HtmlLogo1 from "../assets/It/HTML5.png";
import CssLogo from "../assets/It/css.png";
import JSLogo from "../assets/It/javascript.png";
import Boot from "../assets/It/bootstra.png";
import ReactLogo from "../assets/It/react.png";
import ReduxLogo from "../assets/It/redux.png";
import FigmaLogo from "../assets/It/figma.png";
import GitHubLogo from "../assets/It/github.png";
import GitLogo from "../assets/It/git.png";
import SaasLogo from "../assets/It/saas.png";
import WebpackLogo from "../assets/It/webpack.png";
import MuiLogo from "../assets/It/mui.png";

import React from "react";

const Technologies = () => {
	return (
		<div className='technologies'>
			<div className='technologies__text'>
				<h2>Technology - Skills</h2>
				<p>Front-End</p>
			</div>
			<div className='technologies__container'>
				<div className='technologies__card'>
					<img src={HtmlLogo1} alt='HtmlLogo' />
					<img src={CssLogo} alt='CssLogo' />
					<img src={JSLogo} alt='JsLogo' />
					<img src={Boot} alt='BootstrapLogo' />
					<img src={ReactLogo} alt='ReactLogo' />
					<img src={ReduxLogo} alt='ReduxLogo' />
					<img src={FigmaLogo} alt='FigmaLogo' />
					<img src={GitHubLogo} alt='GitHubLogo' />
					<img src={GitLogo} alt='GitLog' />
					<img src={SaasLogo} alt='SaasLogo' />
					<img src={WebpackLogo} alt='WebpackLogo' />
					<img src={MuiLogo} alt='MuiLogo' />
				</div>
			</div>
		</div>
	);
};

export default Technologies;
