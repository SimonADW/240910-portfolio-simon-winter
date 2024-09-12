import React, { useEffect, useState } from "react";
import style from "./NavComponent.module.css";

type navBarProps = {
	isSmallDevice: boolean;
	isMenuOpen: boolean;
};

const NavComponent = ({isSmallDevice, isMenuOpen}: navBarProps) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
	  const timer = setTimeout(() => {	
		setIsMounted(true);
	  }, 50);
	
	  return () => {
		clearTimeout(timer);
	  }
	}, []);
	
	
	return (
		<>			
		<nav className={`${style.nav} ${isSmallDevice ? style.navMenuLayout : style.navBarLayout} ${isMounted && style.open}`}>
				<a href="#">_Projects</a>
				<a href="#">_Technologies_</a>
				<a href="#">Experience_</a>
		</nav>
		</>
	);
};

export default NavComponent;
