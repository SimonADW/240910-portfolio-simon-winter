import React from "react";
import speechImage from "../../assets/images/speech_bubble.png";
import style from './SpeechBubble.modules.css';

type SpeechBubbleProps = {
	children: React.ReactNode;
}

const SpeechBubble = ({ children }: SpeechBubbleProps) => {
	return (
		<>
			<div className={style.speechBubbleWrapper}>
				<img src={speechImage} alt="speech bubble" />
				<div className={style.speechBubbleText}>{children}</div>
			</div>
		</>
	);
};

export default SpeechBubble;
