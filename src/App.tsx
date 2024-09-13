
import './assets/styles/reset.css'
import './assets/styles/variables.css'
import './assets/styles/App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import HeroComponent from './components/Hero/HeroComponent'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'

function App() {  

  return (
    <>
      <HeaderComponent />
      <main>
      <HeroComponent />
      <ProjectsSection />
      <TechnologiesSection />
      </main>
    </>
  )
}

export default App
