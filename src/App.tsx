
import './assets/styles/reset.css'
import './assets/styles/variables.css'
import './assets/styles/App.css'
import HeaderComponent from './components/Header/HeaderComponent'
import HeroComponent from './components/Hero/HeroComponent'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

function App() {  

  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <ProjectsSection />
    </>
  )
}

export default App
