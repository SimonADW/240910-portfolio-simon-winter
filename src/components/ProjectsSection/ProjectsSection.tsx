import { projectsList } from "../../assets/data/projectsList";
import ProjectComponent from "../Project/ProjectComponent";
import style from "./ProjectsSection.module.css";
// Project screenshot imports
import wdsCalendarClone from '../../assets/images/page-shots/wds-calendar-clone.png'
import passwordGen from '../../assets/images/page-shots/passwordGen.png'
import  dessertStore from '../../assets/images/page-shots/dessertStore.png'
import  mortgageCalc from '../../assets/images/page-shots/mortageCalc.png'
import  starWars from '../../assets/images/page-shots/starWars.png'
import  mittFrohvelv from '../../assets/images/page-shots/mittFrohvelv.png'
import  bunchOBlogs from '../../assets/images/page-shots/bunchOBlogs.png'


export type ProjectType = {
	id: number;
	title: string;
	technologies: string;
	image: string;
	gitUrl: string;
	liveUrl: string;
	description: string;
};



//  TODO: Write jsdoc for all components

const ProjectsSection = () => {	

	// Array of project images - in corresponding order to projectsList
	const images = [bunchOBlogs, wdsCalendarClone, passwordGen, mittFrohvelv, dessertStore, mortgageCalc]

	return (
		<section id='projects' className={style.projectsSection}>
			<h2>Featured Projects</h2>
			{projectsList.map((project: ProjectType, index: number) => {
				return <ProjectComponent key={index} project={project} index={index} images={images} />;
			})}
		</section>
	);
};

export default ProjectsSection;
