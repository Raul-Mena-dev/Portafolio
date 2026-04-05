import { useEffect, useState } from 'react'
import About from './components/About'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { navigationItems, siteContent } from './data/portfolio'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showTopButton, setShowTopButton] = useState(false)
  const [cursorActive, setCursorActive] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')

            if (entry.target.id) {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      {
        threshold: 0.35,
      },
    )

    const revealNodes = document.querySelectorAll('.reveal')
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    revealNodes.forEach((node) => observer.observe(node))
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 520)

    const handlePointerMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }

    const enableCursorState = () => setCursorActive(true)
    const disableCursorState = () => setCursorActive(false)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('pointermove', handlePointerMove)

    const interactiveNodes = document.querySelectorAll('a, button')
    interactiveNodes.forEach((node) => {
      node.addEventListener('pointerenter', enableCursorState)
      node.addEventListener('pointerleave', disableCursorState)
    })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('pointermove', handlePointerMove)

      interactiveNodes.forEach((node) => {
        node.removeEventListener('pointerenter', enableCursorState)
        node.removeEventListener('pointerleave', disableCursorState)
      })
    }
  }, [])

  return (
    <div className="app-shell">
      <CustomCursor position={cursorPosition} active={cursorActive} />

      <div className="background">
        <div className="background__glow background__glow--one" />
        <div className="background__glow background__glow--two" />
        <div className="background__grid" />
      </div>

      <Navbar
        items={navigationItems}
        activeSection={activeSection}
        personal={siteContent.personal}
      />

      <main className="page">
        <Hero personal={siteContent.personal} hero={siteContent.hero} />
        <About about={siteContent.about} technologies={siteContent.technologies} />
        <Skills technologies={siteContent.technologies} />
        <Projects projects={siteContent.projects} />
        <Experience experience={siteContent.experience} />
        <Contact contact={siteContent.contact} personal={siteContent.personal} />
      </main>

      <Footer name={siteContent.personal.name} />
      <BackToTop visible={showTopButton} />
    </div>
  )
}

export default App
