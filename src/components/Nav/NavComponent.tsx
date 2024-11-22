import style from "./NavComponent.module.css";

type navBarProps = {
	isSmallDevice: boolean;
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};



const NavComponent = ({isSmallDevice, isMenuOpen, setIsMenuOpen}: navBarProps) => {
	
	return (
		<>			
		<nav className={`${style.nav} ${isSmallDevice ? style.navMenuLayout : style.navBarLayout} ${isMenuOpen && style.open}`}>
				<a href="#projects" onClick={()=>setIsMenuOpen(false)}>
					Projects
					<div className={style.linkUnderline}></div>
				</a>
				<a href="#technologies" onClick={()=>setIsMenuOpen(false)}>
					Technologies
					<div className={style.linkUnderline}></div>
				</a>
				<a href="#contact" onClick={()=>setIsMenuOpen(false)}>
					Contact
					<div className={style.linkUnderline}></div>					
				</a>
		</nav>
		</>
	);
};

export default NavComponent;
