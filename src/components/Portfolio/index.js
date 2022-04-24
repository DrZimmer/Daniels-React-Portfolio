import React from 'react';
import Project from '../Projects';

function Portfolio() {
	const projects = [
		{
			name: 'Dinner Spinner',
			description:
				'An app that gives you a local dinner spot at random and tracks your dinner history.',
			image: '2 diff bg - black text.jpg',
			deployed: 'https://DrZimmer.github.io/The_Dinner_Spinner/',
		},
		{
			name: 'Mystery of Butler Station',
			description:
				'A space trivia game built with Canvass',
			image: 'mystery-of-butler-station-gif.gif',
			deployed: 'https://mystery-of-butler-station.herokuapp.com/',
		},
		{
			name: 'Plant Pal',
			description:
				'A house-plant based social media channel to make friends, post tips and tricks and learn how to take care of your plant.',
			image: 'DZlogo.jpg',
			deployed: 'https://plant-pal-project.herokuapp.com/',
		},
		{
			name: 'Continu.us',
			description:
				'An e-commerce website built for this company to market and sell their products.',
			image: 'DZlogo.jpg',
			deployed: 'https://continu.us/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'DZlogo.jpg',
			deployed: 'https://thomburt.github.io/weather-dashboard-TB/',
		},	
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header" style={{ textDecoration: "underline", textAlign: "center" }}>My Portfolio</h1>
			</div >
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;