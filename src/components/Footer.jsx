import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <div className='text-white'>
        <div className='flex justify-center gap-8 pt-[100px] text-[18px]'>
            <a href='https://www.instagram.com/nucleocorp/' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
            <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
        </div>

        <div className='text-center py-3'>
            <p className='pb-[12px]'>&copy; Núcleo Corp, 2023. All right reserved.</p>
            <a href="">Privacy Policy</a>
        </div>
        
    </div>
  )
}