import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Sections/Hero'
import WhyRecycle from '../Sections/WhyRecycle'
import HowItWorks from '../Sections/HowItWorks'
import UploadSection from '../Sections/UploadSection'
import RewardsSection from '../Sections/RewardCard'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <WhyRecycle />
        <HowItWorks />
        <UploadSection />
        <RewardsSection />
        <Footer />
    </>
  )
}

export default Home
