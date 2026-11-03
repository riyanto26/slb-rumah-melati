import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import About from './components/About'
import Services from './components/Services'
import Programs from './components/Programs'
import Staff from './components/Staff'
import Gallery from './components/Gallery'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickInfo />
      <About />
      <Services />
      <Programs />
      <Staff />
      <Gallery />
      <Cta />
      <Footer />
    </main>
  )
}