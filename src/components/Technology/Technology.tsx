import style from "./Technology.module.css";

type TechnologyPropsType = {
	techItem: {
		technology: string;
		percentage: number;
		levelName: string;
	}
};

const Technology = ({ techItem }: TechnologyPropsType) => {
	return (
		<div className={style.technologies__techItem}>
			<div className={style.technologies__techItem__textcontainer}>
				<h3>{techItem.technology}</h3>
				<p>{techItem.levelName}</p>
			</div>
			<div
				className={style.technologies__techItem__levelBar}
				title={`${techItem.technology} skill level bar`}
				style={{ width: `${techItem.percentage}%` }}
			></div>
		</div>
	);
};

export default Technology;
