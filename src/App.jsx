import './styles/main.scss'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import SkinCare from './sections/SkinCare'
import Collection from './sections/Collection'
import Review from './sections/Review'
import Follow from './sections/Follow'
import Instargram from './sections/Instargram'
import Footer from './components/Footer'
import TopBanner from './components/TopBanner'
import FixedTopBtn from './components/FixedTopBtn'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [topBanner, setTopBanner]=useState('')
  const [isScrolled, setIsScrolled]=useState(false)

  const [mNavOpen, setMNavOpen] = useState(false)

  const handleMNavOpen = () => setMNavOpen(true)
  const handleMNavClose = () => setMNavOpen(false)

  useEffect(()=>{
    AOS.init({
      duration:400,
      easing:'ease'
    })
  },[])

  useEffect(()=>{
    document.body.style.overflow=mNavOpen?'hidden':''
  },[mNavOpen])

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop>100)
    }
    window.addEventListener('scroll',handleScroll)
  },[])

  const upTopBanner =()=>{
    setTopBanner('up')
  }
  return (
    <div className={`app-container ${topBanner} ${isScrolled? 'scrolled':''}`}>
      <TopBanner onClick={upTopBanner}/>
      <Header 
      mNavOpen={mNavOpen}
      onNavOpen={handleMNavOpen}
      onNavClose={handleMNavClose}
      />
      <main>
        <section id='hero' className='section'><Hero /></section>
        <section id='follow' className='section'><Follow /></section>
        <section id='collection' className='section'><Collection /></section>
        <section id='skincare' className='section'><SkinCare /></section>
        <section id='instargram' className='section'><Instargram /></section>
        {/* <section id='review' className='section'><Review /></section> */}
      </main>
      <Footer />
      <FixedTopBtn changeScroll={isScrolled}/>
    </div>
  )
}

export default App
