// To add a project:
// 1. Add project to the projectslist
// 2. In ProjectsSection.tsx 
// 	a: Import image
//	b: Add imported image to images array

export const projectsList = [
	{
		id: 7,
		title: 'Bunch o\' Blogs',
		technologies: 'React, TypeScript, Node.js, Express, Auth0',
		image: 'bunchOBlogs',
		gitUrl: 'https://github.com/SimonADW/bunch-o-blogs',
		liveUrl: '',
		description: 'Project exploring backend development with Node.js and Express. Features Auth0 authentication, accessibility focus with react-focus-lock, and secure HTML handling with sanitization and parsing on the backend.'
	},
	{
		id: 6,
		title: 'Google Calendar Clone',
		technologies: 'React, TypeScript',
		image: 'wds-calendar-clone',
		gitUrl: 'https://github.com/SimonADW/241013-WDS-google-calendar-clone',
		liveUrl: 'https://wds-calendar-clone.netlify.app/',
		description: 'Project/challenge following WDS`s Typescript course. Storing events in localStorage, rendering events based on available space and adding "+ 1 more" button when overflow'
	},	
	{
		id: 5,
		title: 'Password Generator',
		technologies: 'React, TypeScript, npm',
		image: 'passwordGen',
		gitUrl: 'https://github.com/SimonADW/241115-challenge-password-generator',
		liveUrl: 'https://relaxed-bunny-892680.netlify.app/',
		description: 'A personal project to practice building an interactive password generator. Allows users to customize password length and character types, while dynamically showing password strength.'
	},	
	{
		id: 4,
		title: 'Mitt Frøhvelv',
		technologies: 'React, TypeScript, Firebase',
		image: 'mittFrohvelv',
		gitUrl: 'https://github.com/SimonADW/240917-mitt-frohvelv',
		liveUrl: '',
		description: 'A project upon request, for managing a personal seed vault. Add, edit, and delete entries while storing data in Firebase for persistence.'
	},	
	{
		id: 3,
		title: 'Product-list with cart',
		technologies: 'React, TypeScript',
		image: 'dessertStore',
		gitUrl: 'https://github.com/SimonADW/240807-challenge-react-ts-dessert-store',
		liveUrl: 'https://dessert-store.netlify.app/',
		description: 'A challenge project demonstrating a product catalog with cart functionality. Browse items, add them to the cart, and see a real-time total.'
	},	
	{
		id: 2,
		title: 'Mortgage Calculator',
		technologies: 'React, TypeScript',
		image: 'mortgageCalc',
		gitUrl: 'https://github.com/SimonADW/240712-challenge-mortgage-calc',
		liveUrl: 'https://fm-challenge-mortgage-calc.netlify.app/',
		description: 'A React-based mortgage calculator built as a personal practice project. Users can input loan details to calculate monthly payments and total interest.'
	},
	{
		id: 1,
		title: 'Start Wars API-fetch',
		technologies: 'HTML, CSS, JavaScript',
		image: 'starWars',
		gitUrl: 'https://github.com/SimonADW/ffu-assignment1-starwars',
		liveUrl: 'https://starwarsassignment1.netlify.app/src/films',
		description: 'A school assignment showcasing basic API-fetching skills using the Star Wars API. Users can explore information about Star Wars films and characters.'
	},
];
