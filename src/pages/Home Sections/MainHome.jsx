import React from 'react'
import LandingSection from './LandingSection'
import PlatformDesc from './PlatformDesc'
import TriCol from './TriCol'
import RegistrationSection from './RegistrationSection'
import HowItWorks from './HowItWorks'
import WhatMakesAiDifferent from './what-makes-ai-different/WhatMakesAiDifferent'

const MainHome = ({ regFormRef }) => {
  return (
    <>
      <LandingSection />
      <PlatformDesc />
      <TriCol />
      <RegistrationSection regFormRef={regFormRef} />
      <HowItWorks />
      <WhatMakesAiDifferent />
    </>
  )
}

export default MainHome
