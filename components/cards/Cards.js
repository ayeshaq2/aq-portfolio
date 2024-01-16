
import React from 'react'
import { Stack, Link} from '@chakra-ui/react'

import {
    IconRight, 
    LinkedIn,
    Github,
    Instagram,
    Email,
    Resume,
    Devpost,
} from '../Icons/icons.js'

//import hackers from './hackers.jpg'


/**
 * Card created using the library from ChakraUI
 * https://chakra-ui.com/docs/components/card/usage 
 */ 


let projects = [
    {
        name:"SheHacks 8",
        date:"Oct 2023 - Present",
        technologies:['Next.js','MongoDB','Nodemailer', 'DigitalOcean','Javascript'],
        description:["• Collaborated with a team to develop the SheHacks web application for ‘Women in Tech Society’s’ annual hackathon to service over 300 users.",
                    "• Utilized React,Next.js to implement a user-friendly front-end, and Node.js for the backend, to be deployed using DigitalOcean",
                     "• Designed a password recovery system by ensuring user-specific URL generation, sent via email. ",
                    "• Currently adding on security measures to ensure user-data privacy and integration"],
        github:false,
        githubLink:"abs",
        exefile:"",
        devpost:false,
        devpostLink:'',
        photo:"/images/sh.png",
        extraText:"(In progress)"

    },

    {
        name:"HeroHub",
        date:"Oct - Nov 2023",
        technologies:['Next.js','MySQL','Express.js','Node.js', 'ReST API', 'React'],
        description:["• Designed a comprehensive web application for superhero character data management and retrieval.",
                    "• Implemented a REST API with an integrated MySQL database, for major functionality of the application.",
                     "• Developed a client-side interface using pure HTML/CSS/JavaScript and Next.js for enhanced user-interaction.",
                    "• Ensured data integrity and security by applying input sanitization techniques, preventing malicious attacks on the API.",
                    "• Implemented an authentication protocol for differentiated functionality resulting in enhanced usability and security."],
        github:true,
        githubLink:"https://github.com/ayeshaq2/HeroHub",
        exefile:"",
        photo:"images/herohub.png",

    },

    {
        name:"Memory Lane",
        date:"Nov 2023",
        technologies:['Next.js','MongoDB','Express.js', 'Flask', 'Infobip', 'google-web-speech-api'],
        award:"Sunlife's Best Health Hack @ Hack Western 10",
        description:["• Developed a web app designed to assist individuals with dementia in remembering daily tasks, medications and dates.",
                    "• Utilizied the google-web-speech-api to transcribe voice recording to text for users to access a personalized library of media",
                    "• Implemented a friendly user interface through creating components in Next.js framework",
                    "• The project also implements the infobip API to allow for customized text messaging as reminders"
                    ],
        github:true,
        githubLink:"https://github.com/lelalou/MemoryLane",
        exefile:"",
        devpost:true,
        devpostLink:'https://devpost.com/software/memory-lane-84kcrl',
        photo:"/images/memorylane.jpg",
        

    },
    
    {
        name:"Hackathon Catalogue",
        date:"Oct - Nov 2023",
        technologies:['React','MySQL','Express.js','Node.js','Git'],
        description:[" • Designed and implemented a comprehensive Database Management System (DBMS) using MySQL, coupled with a user-friendly web application.", 
                    "• Collaborated within a team to gather and analyze requirements for an Online Hackathon Catalogue System",
                     "• Applied normalization techniques to enhance data integrity, minimize redundancy, and optimize overall performance",
                    "• Developed the MySQL database system from scratch, implementing the relational model and ensuring seamless integration with the DBMS",
                    "• Integrated database functionalities into the web app, allowing users to perform operations such as data insertion, retrieval, update and deletion"],
        github:true,
        githubLink:"https://github.com/AlexandraLHeureuxECE/assignment-3-group20",
        exefile:"",
        photo:"",
        linkin:true,

    },

    {
        name:"Array Sorting Simulator",
        date:"Jan 2023",
        technologies:['Java','JavaFX','UML Diagrams', 'multithreading',],
        description:["• Developed an interactive JavaFX application to simulate and compare the efficiency of sorting algorithms.",
                    "• Implemented the sorting algorithms in Java, following previously defined UML diagrams for the application structure.",
                    "• Used multi-threading to accurately represent real-time sorting progress. "],
        github:true,
        githubLink:"https://github.com/ayeshaq2/ArraySimulator",
        exefile:"",
        devpost:false,
        extraText:"(EXE file coming soon!)",
        devpostLink:'',
        photo:"/images/arraysimulator.png",
        

    },

    {
        name:"Heart AtTech",
        date:"Nov 2022",
        award:"Best Health Hack @ Hack Western 9",
        technologies:['Figma','React','Firebase'],
        description:["• Developed an application to reduce EMS wait times by 80% through empowering CPR/AED certified individuals to respond"
        +"to nearby emergencies.\n",
                    "• Designed high-fidelity Figma mockups for the UI/UX and implemented it using functional React.js components. ",],
        github:true,
        githubLink:"https://github.com/mackvv/Heart-AtTech",
        exefile:"",
        devpost:true,
        devpostLink:'https://devpost.com/software/heart-attech',
        photo:"/images/heartattech.png",

    },
]


const Cards = () =>{
    return(
        <div className='flex justify-center'>
        <div className='w-2/3 box-border mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 grid-flow-row-dense flex-wrap align-items-start ' >

       { projects.map( (project, index) =>(
            // <SimpleGrid spacing='3' className='flex flex-col justify-between'>
        <div key={index}  className=" flex flex-col border-2 border-pink-800 bg-white rounded-md shadow justify flex-wrap"  >
            
            <Link href={project?.githubLink}>

            <img className='object-cover h-80 w-full mt-0  filter brightness-50 contrast-75 saturate-75 hover:brightness-100 hover:contrast-100 hover:saturate-100 transition duration-300
             ' src={project.photo} />
            </Link>
            
            
              
            <div className=" flex justify-right px-2">
                <h2 className="flex text-rose-800 text-2xl font-bold pt-2 " >{project.name}</h2>
            </div>
        <div className="text-gray-700 ms-3 px-4 py-1">
        <div className='flex flex-wrap'>
                {project.technologies?.map((tech, idx)=>(
                    <span key={idx} className='text-wrap'>
                         <p  className='text-sm text-white font-semibold bg-slate-600 inline-block mr-2 px-2 rounded-sm text-wrap'>{tech} </p>
                    </span>
                ))}
              </div>
            <Stack mt='3' spacing='2'>
                {project.award&&(
                    <p className='text-red-800 opacity-75 text-sm italic font-medium'> {project.award} </p>
                )}
           
            <div className='flex flex-wrap justify '>
                <ul>
                    {project.description?.map((item, idx)=>(
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <p className='text-sm italic drop-shadow-xl text-black pt-5'>{project.date}</p>
            </div>
            <div>
                <p className='font-medium italic drop-shadow-xl text-black pt-5'>{project.extraText}</p>
            </div>


            </Stack>
        </div>
        <div />
        <div  className="align-right justify-right items-right py-4">
        <div className='flex justify ms-4' spacing='20'>
            
            {project.github &&(

                <Link className='mr-3' href={project.githubLink}><Github/></Link>
            )}
            {project.devpost &&(
                <Link href={project.devpostLink}><Devpost/></Link>
            )}
            </div>
        </div>
        </div>
            // </SimpleGrid>
       
    ))}
        </div>
        </div>)
}

export default Cards