import React from 'react'
import ModSponsord from '../../../models/ModSponsord'
import './OrganizationSponsors.css'


export type OrgaSpon = {sponsords: ModSponsord}


const OrganizationSponsors: React.FC<OrgaSpon> = ({sponsords}) => {
  return (
    <div className='containerOrganization'>
        <div className='containerorgaImg'>
          <img src={sponsords.image} alt='sponsord'>
          </img>
        </div>
    </div>
  )
}

export default OrganizationSponsors