import CursorLight from './components/CursorLight'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
//import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal();
  return (
    <>
      <CursorLight />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
