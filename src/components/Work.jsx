import "./WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import ProjectData from "../components/WorkCardData"

const Work = () => {
	return (
		<div className='work__container'>
			<h1 className='project__heading'>Projects</h1>
			<div className='project__container'>
				{ProjectData.map((value, index) => {
					return(
					<WorkCard 
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    source={value.source}
                    />
                    )
				})}
			</div>
		</div>
	);
};

export default Work;
