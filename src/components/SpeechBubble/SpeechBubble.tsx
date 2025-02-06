import React from "react";
import style from "./SpeechBubble.module.css";

interface SpeechBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;	
	fillColor?: string;
	strokeColor?: string;
	speaksFrom?: "left" | "right";
};

const SpeechBubble = ({
	children,
	fillColor = "none",
	strokeColor = "white",
	speaksFrom = "left",
	...delegated
}: SpeechBubbleProps) => {
	const isFlipped = speaksFrom === "right" ? true : false;

	return (
		<>
			<div 
				className={style.speechBubbleWrapper}
				{...delegated}			
			>
				<svg
					
					viewBox="0 0 200 150"
					xmlns="http://www.w3.org/2000/svg"
					fill={fillColor}
					stroke={strokeColor}
					strokeWidth="2px"
					style={{transform: isFlipped ? "rotateY(180deg)" : "rotate(0)"}}
				>
					<path
						d="M10 40 Q10 10, 40 10 L160 10 Q190 10, 190 40 L190 100 Q190 130, 160 130 L80 130 L40 150 L50 130 Q10 130, 10 100 Z"
						fill={fillColor}
						stroke={strokeColor}
						strokeWidth="2px"
					/>
				</svg>

				<div 
				className={style.speechBubbleText} 
				>{children}</div>
			</div>
		</>
	);
};

export default SpeechBubble;
