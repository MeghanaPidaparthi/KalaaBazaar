import React from 'react'
import HeroSection from './HeroSection';
import NewInSection from './NewInSection';
import QuoteSection from './QuoteSection';
import ShopCollections from "./ShopCollections";
import KalaBazaarMission from './MissionSection';
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <NewInSection/><br/>
      <QuoteSection/>
      <ShopCollections/>
      <KalaBazaarMission/>
    </div>
  )
}

export default Home
