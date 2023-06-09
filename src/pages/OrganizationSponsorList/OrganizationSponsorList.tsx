import React, {useEffect, useState} from 'react'
import OrganizationSponsors from '../../components/sessionSupportChakra/organizationSponsors/OrganizationSponsors';
import ModSponsord from '../../models/ModSponsord';
import './OrganizationSponsorList.css'

const OrganizationSponsorList = () => {
    const[orgaSponsords, setOrgaSponsords]= useState<ModSponsord[]>([]);
    const orgaSponsordList: ModSponsord[] =
[
    {
        id: 1,
        image: "",
    },
    {
        id: 2,
        image: "",
    },
    {
        id: 3,
        image: "",
    },
    {
        id: 4,
        image: "",
    },
    {
        id: 5,
        image: "",
    },
    {
        id: 6,
        image: "",
    },
    {
        id: 7,
        image: "",
    },

]

useEffect(()=>{
    setOrgaSponsords(orgaSponsordList)
},[])

  return (
    <>
    <main className='containerOrgaSponsord'>
        {orgaSponsords.map((orgaSponso:ModSponsord) => {  
        return <OrganizationSponsors key={orgaSponso.id} sponsords={orgaSponso}/>
        })}
    </main>
  </>
  )
}

export default OrganizationSponsorList



