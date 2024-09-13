import style from './TechnologiesSection.module.css'
import { skillsList } from '../../assets/data/skillsList'
import Technology from '../Technology/Technology'

const TechnologiesSection = () => {
  return (
	<section className={style.technologiesSection}>
		<h1>Technologies</h1>
		{skillsList.map((techItem, index) => {
			return <Technology key={index} techItem={techItem} />
		})}

	</section>
  )
}

export default TechnologiesSection