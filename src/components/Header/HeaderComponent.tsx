import { useState } from "react";
import style from "./HeaderComponent.module.css";
import NavComponent from "../Nav/NavComponent";
import MenuButtonComponent from "../MenuButton/MenuButtonComponent";

const HeaderComponent = () => {
	const isSmallDevice	= window.innerWidth < 768; 
	const [menuOpen, setMenuOpen] = useState(!isSmallDevice);
	return (
		<section className={style.headerAndMenuSection}>
			<header className={style.header}>
				{isSmallDevice && <MenuButtonComponent isMenuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
				<NavComponent isSmallDevice={isSmallDevice} isMenuOpen={menuOpen} setIsMenuOpen={setMenuOpen} />
			</header>
		</section>
	);
};

export default HeaderComponent;
