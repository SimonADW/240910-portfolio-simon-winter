import style from "./NavComponent.module.css";


type navBarProps = {
	isSmallDevice: boolean;
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};



const NavComponent = ({isSmallDevice, isMenuOpen, setIsMenuOpen}: navBarProps) => {
	
	return (
		<>	
		<nav role="menu" className={`${style.nav} ${isSmallDevice ? style.navMenuLayout : style.navBarLayout} ${isMenuOpen && style.open}`}>
				<a href="#about" tabIndex={isMenuOpen ? 0 : -1} onClick={()=>setIsMenuOpen(false)}>
					About
					<div className={style.linkUnderline}></div>
				</a>
				<a href="#projects" tabIndex={isMenuOpen ? 0 : -1} onClick={()=>setIsMenuOpen(false)}>
					Projects
					<div className={style.linkUnderline}></div>
				</a>
				<a href="#contact" tabIndex={isMenuOpen ? 0 : -1} onClick={()=>setIsMenuOpen(false)}>
					Contact
					<div className={style.linkUnderline}></div>					
				</a>
		</nav>
		</>
	);
};

export default NavComponent;
