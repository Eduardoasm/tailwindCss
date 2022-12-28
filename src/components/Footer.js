import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

export function Footer(){
    return(
          <div className='bg-secondary text-white w-full'>
            <div className='md:flex md:justify-around md:flex-row-reverse'>
            <div className="mt-4 ml-8">
                <div className="flex hover:text-primary"><FaFacebookF/>Facebook</div>
                <div className="flex hover:text-primary"><AiOutlineTwitter/>Twitter</div>
                <div className="flex hover:text-primary"><AiOutlineInstagram/>Instagram</div>
            </div>
            <ul className="mt-4 mb-4 ml-8 md:list-disc">
                <li>Soporte</li>
                <li>Acerca de nosotros</li>
                <li>Registros</li>
                <li>Aviso Privacidad</li>
            </ul>
            </div>
          </div> 
    )
}