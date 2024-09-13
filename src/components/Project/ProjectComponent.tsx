import style from './ProjectComponent.module.css'
import type { ProjectType } from '../ProjectsSection/ProjectsSection'

type ProjectComponentType = {
	project: ProjectType;
}

const ProjectComponent = ({ project }: ProjectComponentType) => {
  return (
	<div className={style.projectContainer}>
		<div className={style.project__imageContent}>
			<button>
				<a href={project.liveUrl} target='_blank' title='Link to live view of project'>
					<img src={project.image} alt={project.title} />
				</a>
			</button>
		</div>

		<div className={style.project__textContent}>
			<h3>{project.title}</h3>
			<div>{project.technologies}</div>
			<button><a href={project.gitUrl} title='Link to code on github' target='_blank'>Code on GitHub</a></button>
		</div>
	</div>
  )
}

export default ProjectComponent