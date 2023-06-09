import React from 'react'
import ModPubSponsord from '../../../models/ModPubSponsord'
import './PubSponsord.css'

export type PubSpons = {sponsords:ModPubSponsord}

const PubSponsord: React.FC<PubSpons> = ({sponsords}) => {
  return (
    <div className='containerPubSponsord'>
        <img src={sponsords.image} alt='img'></img>
          <h5>{sponsords.title}</h5>
          <p>{sponsords.text}</p>
          <button>Sponsor</button>
    </div>
  )
}

export default PubSponsord