import style from './TechnologiesSection.module.css'
import { skillsList } from '../../assets/data/skillsList'
import Technology from '../Technology/Technology'

const TechnologiesSection = () => {
  return (
	<section id='technologies' className={style.technologiesSection}>
		<h2>Technologies</h2>
		{skillsList.map((techItem, index) => {
			return <Technology key={index} techItem={techItem} />
		})}

	</section>
  )
}

export default TechnologiesSection