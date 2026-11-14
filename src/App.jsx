import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CatalogSection from './components/CatalogSection'
import FeaturesSection from './components/FeaturesSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CatalogSection />
        <FeaturesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}

export default App
