import React from 'react'


export const Banner = () => {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg' alt='alt' />

        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen flex flex-col justify-center'>
          <div className='text-center'>
            <h3 className='text-white text-[28px] font-semibold uppercase md:text-[28px]'>Marcelo Filho</h3>
            <h2 className='text-white text-[40px] font-light uppercase md:text-[40px]'>Ouvido Irracional</h2>
            <button className='mt-5 px-10 py-2 bg-[#7C0F82] text-white text-sm uppercase font-medium rounded hover:bg-[#bf2ec7] focus:outline-none focus:bg-[#712575]'>
              <a href='https://open.spotify.com/intl-pt/artist/6SbqcONTwT2QbtGsskztm9?si=SzCGB4F8RGK5XXSfYDBUrw' target='_blank' rel='noopener'>Listen Now</a>
            </button>
          </div>
        </div>
    </div>
  )
}