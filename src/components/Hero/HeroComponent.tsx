import { useEffect, useState } from "react";
import style from "./HeroComponent.module.css";

const HeroComponent = () => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	// FUNCTION TO DETECT TILT ON MOBILE DEVICES, AND SET BOX-SHADOW INSET ON CIRCLEMAIN ACCORDING TO TILT
	const handleTilt = (event: DeviceOrientationEvent) => {
        const tiltSideways = Math.min(Math.max(event.gamma || 0, -15), 15); // Clamps to [-15, 15]
        const tiltFwdBckwards = Math.min(Math.max(event.beta || 0, -15), 15); // Clamps to [-15, 15]		
        const shadowInset = `${tiltSideways}px ${tiltFwdBckwards}px 15px 3px #4f02f6`;
        const circleMainElement: HTMLDivElement = document.querySelector(`.${style.circleMain}`)!;

        if (circleMainElement) {
            circleMainElement.style.boxShadow = shadowInset;
        }
    };

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		// CHECK IF DEVICE SUPPORTS DEVICEORIENTATIONEVENT,AND ADD LISTENER AFTER INITIAL ANIMATION IS DONE
		setTimeout(() => {
		if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", handleTilt);
        } else {
            console.warn("DeviceOrientationEvent is not supported on this device.");
        }
		}, 2000);
		
	
		
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("deviceorientation", handleTilt);
		};
	}, []);

	// CALC TRANSLATION BASE ON SCROLL-Y
	const translateY = Math.min(scrollY * 0.3, 200); // Max translateY 200px

	return (
		<div className={style.hero}>
			<div className={`${style.circleMain} ${style.circle}`}>
				<div
					className={style.nameTitleContainer}
					style={{ transform: `translateY(-${translateY}px)` }}
				>
					<div className={style.name}>Simon_Winter</div>
					<div className={style.title}>Frontend_Developer</div>
				</div>
				<div
					className={`${style.circleSecondary} ${style.circle}`}
					style={{
						transform: `translateY(-${translateY}px)  translateX(-${translateY}px)`,
					}}
				></div>
			</div>
			<div className={style.socialLinks}>
				<a
					href="https://github.com/SimonADW"
					target="_blank"
					title="Git Hub Profile"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="23"
						height="23"
						viewBox="0 0 23 23"
						fill="none"
					>
						<g clipPath="url(#clip0_20_123)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11.1396 0.00012207C5.075 0.00012207 0.172363 5.27095 0.172363 11.7917C0.172363 17.0041 3.31365 21.4162 7.67144 22.9778C8.21628 23.0952 8.41585 22.7241 8.41585 22.4119C8.41585 22.1386 8.39789 21.2016 8.39789 20.2253C5.34708 20.9282 4.71177 18.8196 4.71177 18.8196C4.22149 17.453 3.49504 17.1018 3.49504 17.1018C2.49651 16.3795 3.56777 16.3795 3.56777 16.3795C4.6754 16.4576 5.25661 17.5898 5.25661 17.5898C6.23696 19.3858 7.81669 18.8783 8.45222 18.5659C8.54291 17.8045 8.83363 17.2774 9.1423 16.9847C6.70906 16.7113 4.14898 15.6962 4.14898 11.1669C4.14898 9.87838 4.58449 8.82421 5.27457 8.00436C5.16569 7.71159 4.78428 6.50098 5.38367 4.88067C5.38367 4.88067 6.30969 4.56826 8.39767 6.09105C9.29161 5.83294 10.2135 5.70163 11.1396 5.70053C12.0656 5.70053 13.0096 5.83733 13.8813 6.09105C15.9695 4.56826 16.8955 4.88067 16.8955 4.88067C17.4949 6.50098 17.1133 7.71159 17.0044 8.00436C17.7126 8.82421 18.1302 9.87838 18.1302 11.1669C18.1302 15.6962 15.5701 16.6917 13.1187 16.9847C13.5183 17.3555 13.8631 18.0582 13.8631 19.1711C13.8631 20.7523 13.8451 22.0214 13.8451 22.4117C13.8451 22.7241 14.0449 23.0952 14.5895 22.9781C18.9473 21.416 22.0886 17.0041 22.0886 11.7917C22.1066 5.27095 17.186 0.00012207 11.1396 0.00012207Z"
								fill="white"
							/>
						</g>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/simon-a-d-winter/"
					target="_blank"
					title="LinkedIn Profile"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="23"
						viewBox="0 0 28 23"
						fill="none"
					>
						<g clipPath="url(#clip0_20_125)">
							<path
								d="M25.8484 21.5155C25.9063 21.5161 25.9638 21.5048 26.0171 21.4823C26.0705 21.4597 26.1187 21.4265 26.1587 21.3846C26.1986 21.3427 26.2296 21.2931 26.2495 21.2387C26.2695 21.1844 26.2781 21.1265 26.2748 21.0687C26.2748 20.7519 26.0834 20.6005 25.6909 20.6005H25.0566V22.2595H25.2952V21.5363H25.5883L25.595 21.5451L26.05 22.2595H26.3051L25.8156 21.5201L25.8484 21.5155ZM25.5725 21.3493H25.2959V20.7885H25.6465C25.8276 20.7885 26.0341 20.8181 26.0341 21.055C26.0341 21.3275 25.8251 21.3493 25.5711 21.3493"
								fill="white"
							/>
							<path
								d="M19.6249 19.4364H16.2422V14.1432C16.2422 12.881 16.2196 11.2562 14.4828 11.2562C12.721 11.2562 12.4514 12.6314 12.4514 14.0513V19.436H9.06863V8.55112H12.3161V10.0387H12.3615C12.6865 9.48344 13.1562 9.0267 13.7204 8.71707C14.2846 8.40743 14.9224 8.25651 15.5656 8.28037C18.9942 8.28037 19.6264 10.5337 19.6264 13.4651L19.6249 19.4364ZM5.25177 7.06323C4.86351 7.0633 4.48395 6.94833 4.16109 6.73286C3.83823 6.5174 3.58658 6.2111 3.43794 5.85273C3.28929 5.49435 3.25034 5.09997 3.32601 4.71948C3.40169 4.33898 3.5886 3.98945 3.86309 3.71509C4.13758 3.44073 4.48733 3.25386 4.86811 3.17811C5.24889 3.10236 5.64359 3.14113 6.00232 3.28952C6.36105 3.43791 6.66768 3.68926 6.88344 4.01178C7.0992 4.3343 7.2144 4.7135 7.21447 5.10144C7.21452 5.35902 7.16378 5.61408 7.06517 5.85208C6.96656 6.09007 6.82202 6.30632 6.63976 6.48849C6.45751 6.67066 6.24112 6.81517 6.00296 6.91379C5.76481 7.0124 5.50956 7.06318 5.25177 7.06323ZM6.94314 19.4364H3.55687V8.55112H6.94314V19.4364ZM21.3114 0.00155414H1.85705C1.41549 -0.00342475 0.989994 0.16696 0.674099 0.475267C0.358205 0.783573 0.177752 1.20458 0.172363 1.64577V21.1648C0.177568 21.6062 0.357914 22.0275 0.673798 22.3361C0.989682 22.6447 1.41527 22.8154 1.85705 22.8107H21.3114C21.754 22.8163 22.1808 22.646 22.4979 22.3374C22.8151 22.0288 22.9966 21.607 23.0028 21.1648V1.64436C22.9964 1.2023 22.8148 0.780811 22.4976 0.472512C22.1805 0.164213 21.7538 -0.00568507 21.3114 0.00014525"
								fill="white"
							/>
							<path
								d="M25.6014 19.8615C25.1898 19.8654 24.7965 20.032 24.5076 20.3249C24.2187 20.6178 24.0576 21.0131 24.0596 21.4244C24.0616 21.8356 24.2265 22.2293 24.5182 22.5194C24.8099 22.8095 25.2048 22.9724 25.6163 22.9724C26.0279 22.9724 26.4228 22.8095 26.7145 22.5194C27.0062 22.2293 27.1711 21.8356 27.1731 21.4244C27.1751 21.0131 27.014 20.6178 26.7251 20.3249C26.4361 20.032 26.0429 19.8654 25.6313 19.8615H25.6014ZM25.6014 22.7943C25.3314 22.7988 25.0662 22.7232 24.8393 22.5771C24.6123 22.4309 24.4338 22.2209 24.3264 21.9734C24.2189 21.7259 24.1873 21.4521 24.2356 21.1867C24.2838 20.9213 24.4098 20.6761 24.5975 20.4822C24.7852 20.2883 25.0262 20.1544 25.2901 20.0974C25.554 20.0403 25.8289 20.0628 26.08 20.1619C26.3311 20.2609 26.5472 20.4322 26.7009 20.654C26.8546 20.8757 26.939 21.1381 26.9435 21.4078C26.9435 21.4155 26.9435 21.4229 26.9435 21.4307C26.9511 21.7845 26.8177 22.1269 26.5727 22.3824C26.3277 22.638 25.9911 22.7859 25.637 22.7936H25.6017"
								fill="white"
							/>
						</g>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default HeroComponent;
