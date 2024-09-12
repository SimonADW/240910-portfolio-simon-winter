import React, { useEffect, useState } from "react";
import style from "./NavComponent.module.css";

type navBarProps = {
	isSmallDevice: boolean;
	isMenuOpen: boolean;
};

const NavComponent = ({isSmallDevice, isMenuOpen}: navBarProps) => {
	
	return (
		<>			
		<nav className={`${style.nav} ${isSmallDevice ? style.navMenuLayout : style.navBarLayout} ${isMenuOpen && style.open}`}>
				<a href="#">_Projects</a>
				<a href="#">_Technologies_</a>
				<a href="#">Experience_</a>
		</nav>
		</>
	);
};

export default NavComponent;
