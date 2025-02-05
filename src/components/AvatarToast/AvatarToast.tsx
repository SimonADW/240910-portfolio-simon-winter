import style from "./AvatarToast.module.css";
import avatar from "../../assets/images/avatar-vector.png";
import { InView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AvatarToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Retreat avatar after delay
  useEffect(()=> {
    let timer: number | undefined; 
    if(isVisible) {
      timer = setTimeout(()=> {
        setIsVisible(false);
      }, 4000)
    }

    console.log(timer);
    
    return ()=> clearTimeout(timer);
  }, [isVisible])

	return (    
		<InView threshold={0.2} triggerOnce={true} onChange={(inView)=> inView && setIsVisible(true)}>
			{({ ref }) => (
				<div className={style.wrapper} ref={ref}>          
					<img
						className={style.character}
						src={avatar}
						alt="avatar of me, popping in to say thanks"
            // Slide in when in view
            style={{
							transform: isVisible ? `translateX(45px) rotate(-45deg)` : `translateX(175px) rotate(0deg)`,
						}}
					/>
				</div>
			)}
		</InView>
	);
};

export default AvatarToast;
