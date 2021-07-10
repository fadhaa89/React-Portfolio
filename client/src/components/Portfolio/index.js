import React from 'react';
import Project from '../Project';
// import { Image } from '../../assets/images/
function Portfolio() {
	const projects = [
	
		{
			name: 'Auto Tracker',
			description:
				'This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.',
			image:'Autotracker.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku ',
			],
			github: 'https://github.com/fadhaa89/auto-tracker',
			deployed: 'https://mysterious-beyond-07295.herokuapp.com/user/login',
		},
		
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budgettracker.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: ' https://github.com/fadhaa89/Budget-Tracker',
			deployed: 'https://budget-tracker89.herokuapp.com/',
		},
		{
			name: 'Weather',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/fadhaa89',
			deployed: 'https://fadhaa89.github.io/weather/.',
		},
		{
			name: 'Password Maker',
			description:
				'This is an application that based on user inputed criteria and password length',
			image: 'passwordmaker.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/fadhaa89/password-maker',
			deployed: 'https://fadhaa89.github.io/password-maker/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/fadhaa89/Note-Taker',
			deployed: 'https://fadhaa89.github.io/Note-Taker/',
		},
		{
			name: 'Horiseon',
			description:
				'This application allows adding semantic HTMLs to the Horiseon Website.',
			technologies: ['HTML/CSS'],
			github: 'https://fadhaa89.github.io/Horiseon/',
			deployed: 'https://github.com/fadhaa89/Horiseon',
		},
		{
			name: 'Auto-Tracker-2',
			description:
				'project03/this is an auto tracking system',
			technologies: ['GraphQL,Apollo Server,MongoDB,Redux,Stripe,React'],
			github: 'https://autotrackerbackend.herokuapp.com/',
			deployed: 'https://github.com/fadhaa89/Horiseon',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
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