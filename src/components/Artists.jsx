import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube, faSpotify, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

export const Artists = () => {
  return (
    <div className='w-full min-h-screen'>
        <div className='md:pt-[130px] pt-[30px] md:pb-[68px] pb-[45px] text-center'>
            <h1 className='uppercase text-white font-semibold title'>Artists</h1>
        </div>

        <div className='flex flex-wrap justify-center gap-[30px] text-white text-center'>

            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' src="" alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>Cain MSV</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/nucleocorp/' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' src="" alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>akaBaggio</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/nucleocorp/' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' src="" alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>Marcelo Filho</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/nucleocorp/' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>

            <div className='break'></div>

            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' src="" alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>SNK</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/nucleocorp/' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' src="" alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>Shants</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/nucleocorp/' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' src="" alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>JV</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/nucleocorp/' target='_blank' rel='noopener'><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='/'><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='/'><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='/'><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}