import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import cain from '../assets/cain.jpg';
import bg from '../assets/bg.jpg';
import celo from '../assets/celo2.jpg';
import jao from '../assets/jao.jpg';
import shants from '../assets/shants.jpg';
import snk from '../assets/snk.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube, faSpotify, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

export const Artists = () => {

    useEffect(() => { 
        AOS.init()
    }, []
    )

  return (

    <div className='w-full min-h-screen'>
        <div className='md:pt-[130px] pt-[30px] md:pb-[68px] pb-[45px] text-center'>
            <h1 className='uppercase text-white font-semibold text-[90px] md:text-[156px]' id='artist'>Artists</h1>
        </div>

        <div className='flex flex-wrap justify-center gap-[30px] text-white text-center'>

            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px] object-cover' data-aos="zoom-in" data-aos-duration="1450"  src={cain} alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>Cain MSV</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/michel_pigment/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='https://twitter.com/cain_msv' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='https://www.youtube.com/@caiotinininho' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='https://soundcloud.com/caio-favoretti' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faSoundcloud} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px] object-cover' data-aos="zoom-in" data-aos-duration="1450" src={bg} alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>akaBaggio</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/https.warlley/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='https://twitter.com/whoisbinn' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='https://www.youtube.com/channel/UCopd7gWttKlUCBASpSbDh7Q' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href='https://soundcloud.com/aka_baggio' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faSoundcloud} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px] object-cover' data-aos="zoom-in" data-aos-duration="1450" src={celo} alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>Marcelo Filho</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/marcelofilhc/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='https://twitter.com/Marcelim_msv' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='https://open.spotify.com/intl-pt/artist/6SbqcONTwT2QbtGsskztm9?si=SzCGB4F8RGK5XXSfYDBUrw' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faSpotify} /></a>
                    </div>
                </div>
            </div>

            <div className='break'></div>

            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px] object-cover' data-aos="zoom-in" data-aos-duration="1450" src={snk} alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>SNK</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/snk.html_/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='https://twitter.com/_SnakeSk1n' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href='https://soundcloud.com/snakesk1n' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faSoundcloud} /></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px] object-cover' data-aos="zoom-in" data-aos-duration="1450" src={shants} alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>Shants</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/ynohtnadc/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>                        
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className='w-[271px] h-[271px]' data-aos="zoom-in" data-aos-duration="1450" src={jao} alt="alt"/>

                <div>
                    <h1 className='pt-[20px] pb-[5px] artistTitle font-semibold'>JV</h1>
                    
                    <div className='flex justify-center text-[15px] gap-4'>
                        <a href='https://www.instagram.com/jv.usbert/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href='https://twitter.com/_Penitente' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
  )
}