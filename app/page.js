import Image from 'next/image'
import { Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ">
      <div class="flex justify-center pt-10 ">

      <div className='w-3/5  p-5 rounded-md justify-center align-center items-center'>
        <div className='text-black'>
          <h1 className='text-4xl flex justify-right font-bold italic'>hello!</h1>
            <p className='flex justify-center'>My name is </p><h2 className='text-5xl flex justify-center font-bold'>Ayesha Qaisar</h2>
            <p className='text-sm text-center italic py-5'>Welcome to my portfolio!  </p>
            <p className='text-justify'>I'm a third year software engineering student at <br></br><a className='hover:text-purple-700 hover:font-bold' href="https://www.uwo.ca/index.html">The University of Western Ontario</a> in London, Ontario, Canada.  </p>
        </div> </div>

        
      </div>

   <div className='flex justify-center space-x-4'>
    <Link href="./register">
      <button className='bg-black text-white py-2 px-4 mt-5 rounded cursor-pointer bg-slate-900 hover:bg-red-900' > Resume (pdf) </button>
    </Link>
      
      <Link href='./login'>
        <button className='bg-black text-white py-2 px-4 mt-5 rounded cursor-pointer bg-slate-900 hover:bg-red-900' > Projects </button>
      </Link>
      
      <Link href='./homepage'>
      <button  className='bg-black text-white py-2 px-4 mt-5 rounded cursor-pointer bg-slate-900 hover:bg-red-900' > Experience </button>
      </Link>

      <Link href='./homepage'>
      <button  className='bg-black text-white py-2 px-4 mt-5 rounded cursor-pointer bg-slate-900 hover:bg-red-900' > Contact </button>
      </Link>
      
   </div>

   <div id="about-me">

    <div>
      <h2>About Me</h2>


    </div>



   </div>
      
    </main>
  )
}
