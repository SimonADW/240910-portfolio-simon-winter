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
						<a href={project.liveUrl} target='_blank' title={project.liveUrl ? 'Link to live view of project': 'No live view available - In private use'}>
							<img src={images[index]} alt={project.title} />
						</a>
					</button>
				</div>
				<div className={ inView ? `${style.project__textContent} ${style.fadeIn}`: style.project__textContent}>
					<h3>{project.title}</h3>
					<div>{project.technologies}</div>
					<a href={project.gitUrl} title='Link to code on github' target='_blank'><button>Code on GitHub</button></a>
					<div>
						<p className={style.projectDescriptionLabel}>Description:</p>
						<p>{project.description}</p>
					</div>
				</div>
			</div>
	}
	</InView>
  )
}

export default ProjectComponent