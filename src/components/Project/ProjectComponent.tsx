import style from './ProjectComponent.module.css'
import type { ProjectType } from '../ProjectsSection/ProjectsSection'
import { InView } from "react-intersection-observer";


type ProjectComponentType = {
	project: ProjectType,
	index: number,
	images: string[]
	
}

const ProjectComponent = ({ project, index, images }: ProjectComponentType) => {
	

  return (
	<InView threshold={0.2} triggerOnce={true}>
		{({inView, ref}) =>
			<div ref={ref} className={inView ? `${style.projectContainer} ${style.fadeIn}`: style.projectContainer }>
				<div className={ inView ? `${style.project__imageContent} ${style.fadeIn}`: style.project__imageContent}>
					<button>
						<a href={project.liveUrl} target='_blank' title='Link to live view of project'>
							<img src={images[index]} alt={project.title} />
						</a>
					</button>
				</div>
				<div className={ inView ? `${style.project__textContent} ${style.fadeIn}`: style.project__textContent}>
					<h3>{project.title}</h3>
					<div>{project.technologies}</div>
					<button><a href={project.gitUrl} title='Link to code on github' target='_blank'>Code on GitHub</a></button>
				</div>
			</div>
	}
	</InView>
  )
}

export default ProjectComponent