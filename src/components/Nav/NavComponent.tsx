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
				<a href="#projects" onClick={()=>setIsMenuOpen(false)}>_Projects</a>
				<a href="#technologies" onClick={()=>setIsMenuOpen(false)}>_Technologies_</a>
				<a href="#contact" onClick={()=>setIsMenuOpen(false)}>Contact_</a>
		</nav>
		</>
	);
};

export default NavComponent;
