import React from 'react'
import './Privacy.css'

const Privacy = () => {
  return (
    <div className="privacyDiv mb-5">
    <div >
        <p className="privacyPara">We take privacy seriously</p>
        <h2 className="privacyHeading font-bold">Before you get started</h2>
        <p className="privacyDes"> "We won't share your answers with anyone ( and won't ever tell <br/> you which friends said what about you)"</p>
        <br/>
        <p className="privacyPara">with love, Signature</p>
        <br/>
        <button className='privacyBtn my-button'>Start a test</button>
        <p>Take only 5 minutes</p>
    </div>
    </div>
  )
}

export default Privacy
