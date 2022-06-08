import React, { useEffect, useRef } from 'react'

// sections
import LandingSection from './LandingSection/LandingSection'
import PlatformDesc from './PlatformDesc'
import TriCol from './TriCol'
import RegistrationSection from './RegistrationSection'
import HowItWorks from './HowItWorks'
import WhatMakesAiDifferent from './what-makes-ai-different/WhatMakesAiDifferent'

const MainHome = ({ regFormRef, learnMoreRef }) => {
  const startRef = useRef()
  useEffect(() => {
    startRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <>
      <div ref={startRef}>
        <LandingSection learnMoreRef={learnMoreRef} />
      </div>
      <PlatformDesc />
      <TriCol />
      <RegistrationSection regFormRef={regFormRef} />
      <HowItWorks learnMoreRef={learnMoreRef} />
      <WhatMakesAiDifferent />
    </>
  )
}

export default MainHome
