import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"
import React from 'react'







export default function Footer() {
  return (
    <div className='mt-9 flex justify-between'>
        <a href="https://github.com/arsyaadi" className="" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-green-700"/>
        </a>
        <p className='font-fredoka text-center'>Build with <span className='text-pink-500'>&#10084;</span> By arsyaadi </p>
        <a href="https://web.facebook.com/arsya.xkz" className="" target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} className="text-3xl hover:text-green-700"/>
        </a>
    </div>
  )
}


