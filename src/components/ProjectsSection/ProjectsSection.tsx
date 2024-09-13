import { projectsList } from "../../assets/data/projectsList";
import ProjectComponent from "../Project/ProjectComponent";
import style from "./ProjectsSection.module.css";

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
	return (
		<section id='projects' className={style.projectsSection}>
			<h2>Projects</h2>
			{projectsList.map((project: ProjectType, index: number) => {
				return <ProjectComponent key={index} project={project} />;
			})}
		</section>
	);
};

export default ProjectsSection;
