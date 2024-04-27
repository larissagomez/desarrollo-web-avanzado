import styles from './App.module.css'
import { About } from './Componentes/About/About'
import { Hero } from './Componentes/Hero/Hero'
import { NavBar } from './Componentes/NavBar/NavBar'
import { Projects } from './Componentes/Projects/Projects'
import { Contact } from './Componentes/Contact/Contact'

function App() {
  return <div className={styles.App}>
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
    

}

export default App
//Please read the archive "Readme.txt"