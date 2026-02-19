import './styles/main.scss'
import Header from './components/Header'
import Hero from './sections/Hero'
import SkinCare from './sections/SkinCare'
import Collection from './sections/Collection'
import Review from './sections/Review'
import Follow from './sections/Follow'
import Instargram from './sections/Instargram'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='hero' className='section'><Hero /></section>
        <section id='follow' className='section'><Follow /></section>
        <section id='collection' className='section'><Collection /></section>
        <section id='skincare' className='section'><SkinCare /></section>
        <section id='instargram' className='section'><Instargram /></section>
        {/* <section id='review' className='section'><Review /></section> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
