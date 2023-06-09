import React, { useEffect, useState} from 'react'
import PubSponsord, { PubSpons } from '../../components/sessionSupportChakra/pubSponsord/PubSponsord';
import ModPubSponsord from '../../models/ModPubSponsord'
import './PubSponsordList.css'

const PubSponsordList = () => {
    const[sponsords, setSponsords]= useState<ModPubSponsord[]>([]);
    const pubSponsordList: ModPubSponsord[] =
[
    {
        id: 1,
        image: "",
        title: "Open Collective",
        text: "Sponsor the Chakra UI maintainers",
    },
    {
        id: 2,
        image: "",
        title: "Patreon",
        text: "Sponsor the creator, Segun Adebayo",
    }
]

useEffect(()=>{
    setSponsords(pubSponsordList)
},[])

  return (
    <>
    <main className='containerPubSponsord'>
        {sponsords.map((sponso:ModPubSponsord) => {  
        return <PubSponsord key={sponso.id} sponsords={sponso}/>
        })}
    </main>
  </>
  )
}

export default PubSponsordList