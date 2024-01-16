
import React from 'react'
import {Link} from '@chakra-ui/react'
//import styled from 'styled-component'



/* 

Icons imported from codewonders
Github: https://github.com/adenekan41

*/

import {
    IconRight, 
    LinkedIn,
    Github,
    Instagram,
    Email,
    Resume,
} from '../Icons/icons.js'

const Footer = () => {
    return (
      <>
      <div className='flex flex-wrap justify-center sm:space-x-4 space-x-20 backdrop-blur-md py-4 pb-5  sm:w-5/6'>

      <Link className='hover:opacity-100 opacity-75' href='https://github.com/ayeshaq2'>
          <Github></Github>
      </Link>
      
      <Link className='hover:opacity-100 opacity-75' href='https://drive.google.com/file/d/1S37MLLszvAYqw6e5T2OEtfiHqN6Y5xSe/view?usp=sharing'>
         <Resume></Resume>
      </Link>

      <Link className='hover:opacity-100 opacity-75' href='https://www.linkedin.com/in/ayeshaqaisar/'>
         <LinkedIn></LinkedIn>
      </Link>

      <Link className='hover:opacity-100 opacity-75' href='https://www.instagram.com/ayesha.qaisarr/'>
         <Instagram></Instagram>
      </Link>

      <Link className='hover:opacity-100 opacity-75' href='mailto:ayeshaqaisar002@gmail.com?subject=From Your Portfolio!&body='>
         <Email></Email>
      </Link>
      

      

      </div>
      
      </>
    
    )
  }

export default Footer


