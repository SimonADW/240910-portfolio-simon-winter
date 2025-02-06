import style from "./AvatarToast.module.css";
import avatar from "../../assets/images/avatar-vector.png";
import { InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SpeechBubble from "../SpeechBubble/SpeechBubble";

const AvatarToast = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isSpeechVisible, setIsSpeechVisible] = useState(false)

	// Retreat avatar after delay
	useEffect(() => {
		let timer: number | undefined;
		if (isVisible) {
			timer = setTimeout(() => {
				setIsVisible(false);
			}, 4000);
		}

		return () => clearTimeout(timer);
	}, [isVisible]);

	// Enter and retreat speechbubble after delay
	useEffect(()=> {		
		let timer1: number | undefined;	
		let timer2: number | undefined;	

		if (isVisible) {
			timer1 = setTimeout(()=> {
				setIsSpeechVisible(true)
			}, 500)
			
			timer2 = setTimeout(()=> {
				setIsSpeechVisible(false)
			}, 3500)
		}

		return ()=> {
			clearTimeout(timer1);
			clearTimeout(timer2);
		} 
	}, [isVisible])



	return (
		<>
			<InView
				threshold={0.2}
				triggerOnce={true}
				onChange={(inView) => inView && setIsVisible(true)}
			>
				{({ ref }) => (
					<div className={style.wrapper} ref={ref}>
						<img
							className={style.character}
							src={avatar}
							alt="avatar of me, popping in to say thanks"
							// Slide in when in view
							style={{
								transform: isVisible
									? `translateX(45px) rotate(-45deg)`
									: `translateX(175px) rotate(0deg)`,
							}}
						/>

						<SpeechBubble
							speaksFrom="right"
							// fontColor="pink"
							style={{
								opacity: isSpeechVisible ? 1 : 0,
								transition: "opacity 400ms ease-out",
               					transform: "rotate(-10deg)"
							}}
						>
							Thanks for stopping by! <br /> 💙🧡
						</SpeechBubble>
					</div>
				)}
			</InView>
		</>
	);
};

export default AvatarToast;
