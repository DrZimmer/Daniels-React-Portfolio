import React from 'react';
import Project from '../Projects';

function Portfolio() {
	const projects = [
		{
			name: 'Fitness Trainer Buddy',
			description:
				'An app that allows you to create new workouts and customize your exercises, nutrition coming soon.',
			image: 'workoutbuddy.png',
			deployed: 'https://fitness-trainer-buddy.herokuapp.com/',
			repo: 'https://github.com/gsd79/Workout-Buddy'
		},
		{
			name: 'Dinner Spinner',
			description:
				'An app that gives you a local dinner spot at random and tracks your dinner history.',
			image: '2 diff bg - black text.jpg',
			deployed: 'https://DrZimmer.github.io/The_Dinner_Spinner/',
			repo: 'https://github.com/DrZimmer/The_Dinner_Spinner'
		},
		{
			name: 'Mystery of Butler Station',
			description:
				'A space trivia game built with Canvass.',
			image: 'mystery-of-butler-station-gif.gif',
			deployed: 'https://mystery-of-butler-station.herokuapp.com/',
			repo: 'https://github.com/gsd79/Mystery-of-Butler-Station'
		},
		{
			name: 'Budget Tracker',
			description:
				'A budget tracker designed to keep track of influxes as well as outflows and represent that data graphically. Works online as well as offline',
			image: 'budget.png',
			deployed: 'https://daniels-budget-tracker.herokuapp.com/',
			repo: 'https://github.com/DrZimmer/Daniels-Budget-Tracker'
		},
		{
			name: 'Code Quiz',
			description:
				'A timed quiz over Javascript with local storage utilization for high scores.',
			image: 'code_quiz.png',
			deployed: 'https://drzimmer.github.io/Daniels_Code_Quiz/',
			repo: 'https://github.com/DrZimmer/Daniels_Code_Quiz'
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather conditions and a five-day weather forecast for any city.',
			image: 'project_4.jpg',
			deployed: 'https://drzimmer.github.io/Daniels_Weather_Dashboard/',
			repo: 'https://github.com/DrZimmer/Daniels_Weather_Dashboard'
		},	
		{
			name: 'Deep Thoughts',
			description:
				'A social media platform built with React and GraphQL designed to comment and react to deep thoughts.',
			image: 'deep_thoughts.png',
			deployed: 'https://dz-deep-thoughts.herokuapp.com/',
			repo: 'https://github.com/DrZimmer/deep-thoughts/tree/main'
		},	
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div >
			<div>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;