import React from 'react'
import LandingSection from './LandingSection'
import PlatformDesc from './PlatformDesc'
import TriCol from './TriCol'
import RegistrationSection from './RegistrationSection'
import HowItWorks from './HowItWorks'
import WhatMakesAiDifferent from './what-makes-ai-different/WhatMakesAiDifferent'

const MainHome = () => {
  return (
    <>
      <LandingSection />
      <PlatformDesc />
      <TriCol />
      <RegistrationSection />
      <HowItWorks />
      <WhatMakesAiDifferent />
    </>
  )
}

export default MainHome
