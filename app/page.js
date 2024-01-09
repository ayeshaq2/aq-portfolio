"use client"

import Image from 'next/image'
import { Link } from '@chakra-ui/react'
import Footer from './components/footer/Footer.js'
import Timeline from './components/timeline/Timeline.js'
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react'
import Cards from './components/cards/Cards.js'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-100 pb-3 ">
      <div className="flex justify-center pt-10 ">

      <div className='w-3/5  pt-5 rounded-md justify-center align-center items-center'>
        <div className='text-black'>
          <h1 className='text-4xl bg-gradient-to-r from-purple-800 via-indigo-800 to-rose-600 bg-clip-text text-transparent flex justify-right font-bold italic '>hello!</h1>
            <p className='flex justify-center'>My name is </p><h2 className='text-5xl flex justify-center font-bold'>Ayesha Qaisar</h2>
            <p className='text-sm text-center italic py-5'>Welcome to my portfolio!  </p>
            
        </div> </div>

        
      </div>

   <div className='flex justify-center space-x-4'>
    <Link href="https://drive.google.com/file/d/1S37MLLszvAYqw6e5T2OEtfiHqN6Y5xSe/view?usp=sharing">
      <button className='bg-white font-medium text-black text-sm py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Resume (pdf) </button>
    </Link>
      
      <Link href='#projects'>
        <button className='bg-white font-medium text-black text-sm py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Projects </button>
      </Link>
      
      <Link href='#experience'>
      <button  className='bg-white font-medium text-black text-sm py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Experience </button>
      </Link>

      <Link href='#contact'>
      <button  className='bg-white font-medium text-black text-sm py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Contact </button>
      </Link>
      
   </div>

   <h2 className='pt-4 ms-20 text-2xl'>About Me</h2>
   <div id="about-me" className='flex justify-center pt-5'>
   
   <br/>
   <br/>

    <div className='border border-slate-400 rounded-xl w-4/5 p-3 bg-purple-100 '>

      <Card>
        

        <CardBody>
          <Stack divider = {<StackDivider />} spacing='4'>
            <Box>
              <Heading  size='xs' textTransform='uppercase'></Heading>
              
              <p className='text-justify'>I'm a third year software engineering student at <a className='hover:text-purple-700 hover:font-bold' href="https://www.uwo.ca/index.html">The University of Western Ontario</a> in London, Ontario, Canada.  </p>
              <p>While I was terrified to take my first (mandatory) coding class in first year, I've come to really enjoy coding and developing solutions. </p>
              <p>I'm also interested in business analysis and, as everyone, have recently tried to get my foot in AI through my research experience.</p>
              <p>In my free time, I like to read (mostly fiction!), do calligraphy and even go on beautiful long hikes!</p>
              <p>If you have similar interests or want to chat about my experiences, please feel free to reach out to me at ayeshaqaisar002@gmail.com !</p>
              <p className='italic'>(Updated version of this website coming soon!)</p>
            </Box>
            


          </Stack>

        </CardBody>

      </Card>




    </div>
    
   </div>

   <div id="projects">

    <div>
      <h2 className='pt-10 ms-20 text-2xl'>Projects</h2>
      <Cards/>


    </div>
    
   </div>

   <div id="experience">

    <div>
      <h2 className='pt-10 ms-8 text-2xl'>Experience</h2>
      <div className='flex justify-center'>
        <Timeline/>
      </div>
      




    </div>
    
   </div> 

   {/* <div id="contact">

    <div>
      <h2 className='pt-10 ms-20 text-2xl'>Contact</h2>


    </div>
    
   </div> */}
   


   <div id='footer' className=' fixed bottom-0 left-0 w-full'>
   <Footer/>
   </div>


   
     
    </main>
  )
}
