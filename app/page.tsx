import React from 'react'
import Profile from '../components/profile'
import Navbutton from '@components/navbutton'
import QuickAccessTab from '@components/quick_access_tab'
import Categories from '@components/categories'
import BottomNavBar from '@components/bottom_nav_bar'

const Home = () => {
  return (
    <div className='px-1'>
      <div className='pl-4 py-1 pr-10 flex items-center'>
        <Profile/>
        <Navbutton>All</Navbutton>
        <Navbutton>Music</Navbutton>
        <Navbutton>Podcast</Navbutton>
      </div>
      <div className=' min-h-64 py-2 '>
        <QuickAccessTab/>
      </div>
      <div>
        <Categories/>
      </div>
      <div className=' w-[98vw] place-content-center fixed bottom-0 h-1/5'>
        <BottomNavBar/>
      </div>
    </div>
  )
}

export default Home