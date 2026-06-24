import { useReducedMotion } from './hooks/useReducedMotion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Nav from './components/Nav'
import FdeHero from './sections/FdeHero'
import Thesis from './sections/Thesis'
import Competencies from './sections/Competencies'
import Domains from './sections/Domains'
import Dossiers from './sections/Dossiers'
import FdeContact from './sections/FdeContact'

export default function App() {
  const reduced = useReducedMotion()
  useSmoothScroll(!reduced)

  return (
    <div className="noise relative">
      <Nav />
      <main>
        <FdeHero />
        <Thesis />
        <Competencies />
        <Domains />
        <Dossiers />
        <FdeContact />
      </main>
    </div>
  )
}
