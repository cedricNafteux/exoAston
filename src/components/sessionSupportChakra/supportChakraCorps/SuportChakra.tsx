import React from 'react'
import ModPubSponsord from '../../../models/ModPubSponsord'
import OrganizationSponsorList from '../../../pages/OrganizationSponsorList/OrganizationSponsorList'
import PubSponsordList from '../../../pages/pubSponsordList/PubSponsordList'
import OrganizationSponsors from '../organizationSponsors/OrganizationSponsors'
import PubSponsord from '../pubSponsord/PubSponsord'
import SupportChakraTitle from '../supportChakraTitle/SupportChakraTitle'
import './SupportChakra.css'

const SuportChakra = () => {
  return (
    <div className='supportChakra'>
      <SupportChakraTitle />
      <PubSponsordList />
      <h6>ORGANIZATION SPONSORS</h6>
      <OrganizationSponsorList />
    </div>
  )
}

export default SuportChakra