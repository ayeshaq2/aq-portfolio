"use client"

import Image from 'next/image'
import { Link } from '@chakra-ui/react'
import Footer from './app/components/footer/Footer.js'
import Timeline from './components/timeline/Timeline.js'
import { Card, CardHeader, CardBody, CardFooter, Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react'
import Cards from './components/cards/Cards.js'
import Skills from './components/skills/Skills.js'
import {Grad, Code, Interest, Hobbies, Heart} from './components/Icons/icons.js'

export default function Home() {
  return (
    <main className="min-h-screen background-main pb-3 ">
      <div className="flex justify-center pt-10 ">

      <div className='w-3/5  pt-5 rounded-md justify-center align-center items-center'>
        <div className='text-black'>
          <div className='pt-20 p-5 ms-10'>
          <h1 className='overflow-hidden leading-none text-9xl bg-gradient-to-r from-indige-800 via-purple-500 to-rose-600 bg-clip-text font-bold italic '>  
            {['h','e','l','l','o'].map((letter, index)=>(
              <span key={index} className={`wave-animation delay-${index}`}>{letter}</span>
            ))}
          
          </h1>

          </div>

          <div className='text-center flex items-end justify-center'>
              <p className='text-base mb-0'>My name is</p>
                <h2 className='text-6xl font-bold mb-0'> &nbsp;Ayesha Qaisar</h2>
          </div>

          {/* <div className='text-center'>
          <p className='flex pt-5' >My name is <h2 className='text-6xl flex justify-center font-bold'>Ayesha Qaisar</h2> </p>
          </div> */}
          <p className='text-sm text-center italic py-5'>Welcome to my portfolio!  </p>
            
          
           
        </div> </div>

        
      </div>

   <div className='flex justify-center space-x-4'>
    <Link href="https://drive.google.com/file/d/1S37MLLszvAYqw6e5T2OEtfiHqN6Y5xSe/view?usp=sharing">
      <button className='bg-white font-medium text-black text-md py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Resume (pdf) </button>
    </Link>
      
      <Link href='#projects'>
        <button className='bg-white font-medium text-black text-md py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Projects </button>
      </Link>
      
      <Link href='#experience'>
      <button  className='bg-white font-medium text-black text-md py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Experience </button>
      </Link>

      <Link href='#contact'>
      <button  className='bg-white font-medium text-black text-md py-2 px-4 mt-5 rounded cursor-pointer bg-white hover:bg-purple-950 hover:text-white' > Contact </button>
      </Link>
      
   </div>

   <h2 className='text-3xl font-bold pt-4 mx-20 text-rose-800'>About Me</h2>
   <div id="about-me" className='flex justify-center pt-5'>
   
   <br/>
   <br/>

    <div className='border border-slate-400 rounded-xl w-4/5 p-3 bg-purple-100 '>

      <Card>
        

        <CardBody>
          <Stack divider = {<StackDivider />} spacing='4'>
            <Box>
              <Heading  size='xs' textTransform='uppercase'></Heading>
              <ul className='list-none'>
                <li className='pt-4 pb-4'> <i className='inline-block'><Grad/></i> &nbsp;&nbsp; I'm a third year software engineering student at <a className='hover:text-purple-700 hover:font-bold' href="https://www.uwo.ca/index.html">The University of Western Ontario</a> in London, Ontario, Canada.  </li>

                <li className='pt-2 pb-2'><i className='inline-block'><Code/></i> &nbsp;&nbsp; While I was terrified to take my first (mandatory) coding class in first year, I've come to really enjoy coding and developing solutions.</li>
                <li className='pt-2 pb-2'><i className='inline-block'><Interest/></i> &nbsp;&nbsp; I'm also interested in business analysis and, as everyone, have recently tried to get my foot in AI through my research experience.</li>
                <li className='pt-2 pb-2'><i className='inline-block'><Hobbies/></i>  &nbsp;&nbsp;In my free time, I like to read (mostly fiction!), do calligraphy and even go on beautiful long hikes!</li>
                <li className='pt-2 pb-2'><i className='inline-block'><Heart/></i> &nbsp;&nbsp; If you have similar interests or want to chat about my experiences, please feel free to reach out to me at ayeshaqaisar002@gmail.com !</li>

              </ul>
              
              <p className='italic text-lg text-center pt-5'>(Updated version of this website coming soon!)</p>
            </Box>
            


          </Stack>

        </CardBody>

      </Card>




    </div>
    
   </div>

   <div id="projects">

    <div>
      <h2 className='text-3xl font-bold pt-4 pb-4 mx-20 text-rose-800'>Projects</h2>
      <Cards/>


    </div>
    
   </div>

   <div id="experience">

    <div>
      <h2 className='text-3xl font-bold pt-4 mx-20 text-rose-900'>Experience</h2>
      <div className='flex justify-center'>
        <Timeline/>
      </div>
      




    </div>
    
   </div> 

   <div className='pb-20' id="skills">
    <div>

    <h2 className='text-3xl font-bold pt-4 mx-20 text-rose-900'>Skills</h2>
      <div className='flex justify-center'>
        <Skills/>
      </div>


    </div>
   </div>

   {/* <div id="contact">

    <div>
      <h2 className='pt-10 ms-20 text-2xl'>Contact</h2>


    </div>
    
   </div> */}
   


   <div id='footer' className=' fixed pt-40 bottom-0 left-0 w-full'>
   <Footer/>
   </div>


   
     
    </main>
  )
}
