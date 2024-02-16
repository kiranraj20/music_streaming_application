import React from 'react'
import { FaLink, FaPlay, FaPlusCircle } from 'react-icons/fa'

const AudioBar = () => {
  return (
    <div className='px-2 bg-primary-SmokyLightBlack h-16 my-1 rounded-md flex place-content-between items-center'>
        <div className=' w-11 h-11 rounded-md bg-primary-LightRed'></div>
        <div className=' text-white'>
            <p className='text-sm font-bold'>Tu Hi Meri Shab Hai, Pt.1</p>
            <p className='text-sm'>KK</p>
        </div>
        <div className=' w-4/12 text-white flex flex-row place-content-between'>
            <FaLink className='h-8 w-8 drop-shadow-lg'/>
            <FaPlusCircle className='h-8 w-8 drop-shadow-lg'/>
            <FaPlay className='h-8 w-8 drop-shadow-lg'/>
        </div>
    </div>
  )
}

export default AudioBar