
import './assets/styles/reset.css'
import './assets/styles/variables.css'
import './assets/styles/App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import HeroComponent from './components/Hero/HeroComponent'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'
import FooterComponent from './components/Footer/FooterComponen'
import ContactComponent from './components/Contact/ContactComponent'
import AvatarToast from './components/AvatarToast/AvatarToast'
import AboutSection from './components/AboutSection/AboutSection'

function App() {  

  return (
    <>
      <HeaderComponent />
      <main>
      <HeroComponent />
      <AboutSection />
      <ProjectsSection />
      {/* <TechnologiesSection /> */}
      <ContactComponent />
      </main>
      <AvatarToast />
      <FooterComponent />
    </>
  )
}

export default App
