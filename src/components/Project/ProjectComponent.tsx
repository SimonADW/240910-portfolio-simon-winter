import React from 'react'
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
				<a href={project.liveUrl}>
					<img src={project.image} alt={project.title} />
				</a>
			</button>
		</div>

		<div className={style.project__textContent}>
			<h3>{project.title}</h3>
			<div>{project.technologies}</div>
			<button><a href={project.gitUrl}>Code on GitHub</a></button>
		</div>
	</div>
  )
}

export default ProjectComponent