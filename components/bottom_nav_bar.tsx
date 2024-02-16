import React from 'react'
import { IoDiamondOutline, IoHome, IoSearch } from "react-icons/io5";
import { LuLibrary } from 'react-icons/lu';
import AudioBar from './audio_bar';

const BottomNavBar = () => {
  return (
    <div className='w-[97vw] mb-9 fixed bottom-0'>
        <AudioBar/>
        <div className=' px-6 py-3 text-white flex place-content-between'>
        <IoHome className=' h-10 w-10 drop-shadow-lg' />
        <IoSearch className=' h-10 w-10 drop-shadow-lg' />
        <LuLibrary className=' h-10 w-10 drop-shadow-lg' />
        <IoDiamondOutline className=' h-10 w-10 drop-shadow-lg' />
        </div>
    </div>
  )
}

export default BottomNavBar