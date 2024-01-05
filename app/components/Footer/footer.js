
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
} from '.././Icons/icons.js'

const Footer = () => {
    return (
      <>
      <div className='flex backdrop-blur space-x-20 justify-center py-4 pb-5'>

      <Link href='https://github.com/ayeshaq2'>
          <Github></Github>
      </Link>
      
      <Link href='https://drive.google.com/file/d/1foBEmJMUvAmSvwgHJzONYU4VYudbWU4_/view?usp=sharing'>
         <Resume></Resume>
      </Link>

      <Link href='https://www.linkedin.com/in/ayeshaqaisar/'>
         <LinkedIn></LinkedIn>
      </Link>

      <Link href='https://www.instagram.com/ayesha.qaisarr/'>
         <Instagram></Instagram>
      </Link>

      <Link href='mailto:ayeshaqaisar002@gmail.com?subject=From Your Portfolio!&body='>
         <Email></Email>
      </Link>
      

      

      </div>
      
      </>
    
    )
  }

export default Footer


