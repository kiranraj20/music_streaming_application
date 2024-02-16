import React from 'react'

const Navbutton = ({children} : any) => {
    return (
        <div className='p-0 m-0'>
            <p className=' px-4 p-0.5 ml-4 text-primary-OrangeGreen items-center rounded-full bg-primary-SmokyDarkBlack drop-shadow-lg'>
                {children}
            </p>
        </div>
    )
}

export default Navbutton