import React from "react";
import style from "./HeaderComponent.module.css";

const HeaderComponent = () => {
	return (
		<section className={style.headerAndMenuSection}>
			<header className={style.header}>
				<button>Menu</button>
			</header>
			<nav className={style.nav}>
				<a href="#">_Projects</a>
				<a href="#">_Technologies_</a>
				<a href="#">Experience_</a>
			</nav>
		</section>
	);
};

export default HeaderComponent;
