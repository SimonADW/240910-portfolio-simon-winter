import { projectsList } from "../../assets/data/projectsList";
import ProjectComponent from "../Project/ProjectComponent";
import style from "./ProjectsSection.module.css";
// Project screenshot imports
import  dessertStore from '../../assets/images/page-shots/dessertStore.png'
import  mortgageCalc from '../../assets/images/page-shots/mortageCalc.png'
import  starWars from '../../assets/images/page-shots/starWars.png'


export type ProjectType = {
	id: number;
	title: string;
	technologies: string;
	image: string;
	gitUrl: string;
	liveUrl: string;
};



//  TODO: Write jsdoc for all components

const ProjectsSection = () => {
	// Array of project images - in corresponding order to projectsList
	const images = [dessertStore, mortgageCalc, starWars]

	return (
		<section id='projects' className={style.projectsSection}>
			<h2>Projects</h2>
			{projectsList.map((project: ProjectType, index: number) => {
				return <ProjectComponent key={index} project={project} index={index} images={images} />;
			})}
		</section>
	);
};

export default ProjectsSection;
