import styles from "./App.module.css"
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {
  return (
          <div className={styles.App}>
              <NavBar/>
              <Hero/>
              <About/>
              <Skills/>
              <Projects/>
          </div>
  );
}

export default App
