import React from 'react'
import style from './MenuButtonComponent.module.css'

type menuButtonProps = {
	isMenuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}	

const MenuButtonComponent = ({isMenuOpen, setMenuOpen}: menuButtonProps) => {
  return (
	<>
		<button
			className={style.menuButton}
			title={isMenuOpen ? "Close Menu" : "Open Menu" }
			aria-label={isMenuOpen ? "Close Menu" : "Open Menu" }
			onClick={()=>setMenuOpen(!isMenuOpen)}
			>
				{isMenuOpen ? 
				<svg width="800px" height="800px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>	
				:
				<svg width="800px" height="800px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			}
		</button>
	</>
  )
}

export default MenuButtonComponent