import React from 'react'
import MeetAheadApp from './MeetAheadApp'
import SelfImprovement from './SelfImprovement'
import EQbeats from './EQbeats'

const Manifesto = () => {
  return (
    <>
   <MeetAheadApp/>
   <SelfImprovement/>
   <EQbeats eqHeading="Be Best You with EQ" eqpara1="Not having your own emotions under control might be holding" eqpara2="Additionally, not understanding those of others stops you from being parent, friend you can be." />    
    </>
  )
}

export default Manifesto
