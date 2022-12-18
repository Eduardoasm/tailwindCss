import React from 'react'
import logo from "../images/fastfood-logo-D673849A4C-seeklogo.com.png"
import { GiHamburgerMenu } from 'react-icons/gi'

export function Navbar() {
    return(
        <>
          <div className="px-2 bg-secondary text-white flex justify-between">
            <div><img className='h-12 py-1' src={logo} alt="img"/></div>
            <div className='text-2xl mt-2'>
              <GiHamburgerMenu/>
            </div>
          </div>
        </>
    )
}