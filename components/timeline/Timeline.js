import React from 'react'
import {Chrono} from "react-chrono";
import {Poster} from '../Icons/icons.js'
import {Link} from '@chakra-ui/react'



/**
 * Using react-chrono library for a timeline
 * https://www.npmjs.com/package/react-chrono
 * 
 * Using these examples to customize the timeline:
 * https://github.com/prabhuignoto/react-chrono?tab=readme-ov-file#theme
 */

let experiences = [{
    title:"May 2023 - Present",
    cardTitle:"Undergraduate Research Fellowship",
    cardSubtitle:"Faculty of Engineering, Western University - London, Canada",
    cardDetailedText:["• Received the Bill and Barbara Etherington fellowship, awarded to the top 4 research students, by achieving a 75%+ average.",
                    "• Conducted in-depth NLP research on Topic Modelling, utilizing NLP libraries and algorithms to analyse student survey data.",
                " • Developed web-scrapers to create SWKT (Software keyword Text), a unique, undergraduate software engineering dataset.",
            "• Currently conducting further research in machine learning to train an AI transformer model for the software domain"],
    showPosterIcon: true,
    

    
    

},
{
    title:"Dec 2023 - Present",
    cardTitle:"ADA Program Mentor",
    cardSubtitle:"Women In Tech Society - London, ON, Canada",
    cardDetailedText:["• Mentoring a group of female students enrolled in first and second year STEM programs",
                    "•Offering guidance and support in the development of a full-stack web application based on a given prompt.",
                ],


},
{
    title:"Feb 2022 - Present",
    cardTitle:"Student Ambassador",
    cardSubtitle:"hEr VOLUTION - Ontario, Canada",
    cardDetailedText:["• Spearheaded educational outreach, facilitating workshops to mentor young girls interested in pursuing STEM careers.",
    "• Planned and launched “Hack-a-Day”; a new, 24-hour hackathon, geared towards teaching programming fundamentals.",
    "• Orchestrated a successful first iteration, resulting in a 177% increase in applications and a 150% boost in attendance for the"+
    "second iteration which included career development sessions. "],  

},


{
    title:"Sept - Dec 2022",
    cardTitle:"RBC Design Thinking Program Member - London, Canada",
    cardSubtitle:"Royal Bank of Canada",
    cardDetailedText:["• Leveraged design thinking methodologies to design a mobile app in Figma.",
                        "• Designed “MentHer”; an online mentorship platform for women, as a proposed technical solution to the UN Sustainable Development Goal #5: Gender Inequality",] , 
},

{
    title:"May - Aug 2022",
    cardTitle:"Social Media Community Manager",
    cardSubtitle:"Northwest London Resource Center - London, Canada",
    cardDetailedText:["• Organized the junior summer camp, alongside the Program Coordinator by planning 4 day, 6-week camp schedule.",
    "• Ensured that the planned activities followed the set regulations, while keeping costs to a minimum.",
    "• Led the social media campaign by photographing daily insights from the camp",
    "• Created regular content based on the progress of the camp, in the form of videos and posters which became the connection between"+
   " the camp, families and our sponsors.",
    "• Increased the Instagram following by 100+ and Facebook reach by 5000+ through implementing an efficiently planned social media schedule."]
},

]


const Timeline =() =>{
    return(
        <div className='w-5/6 pt-7 pb-10' >
             <Chrono items={experiences}  mode="VERTICAL_ALTERNATING" enableOutline 
             mediaSettings={{ }} 
             theme={{
                primary:"black",
                secondary:'transparent', 
                titleColor:'black',
                titleColorActive:'black',
                cardSubtitleColor:'black',
                cardTitleColor:"purple"


             }}
             

             >
                {experiences.map((exp)=>(
                     <div>
                        {exp.cardDetailedText?.map((item, idx)=>(
                            <p key={idx}>{item}</p>
                        ))}
                     
                     {exp.showPosterIcon&&(

                        <Link className='p-4 flex justify-right' href="https://drive.google.com/file/d/1rGWGHP0-T0LePBx-AwQncXXyGCMWlx8m/view?usp=sharing">
                            <button className='flex justify-right'><Poster/></button>
                        </Link>

                     )}
                     
                     
                     {/* <Link href="https://www.instagram.com"><a>123</a></Link> */}
                     
                 </div>

                ))}
               
               

                


                 {/* {(item, idx) => {
                    console.log(item);
                   
                    <div className="p-4">
                        <i class="fa-solid fa-square-poll-vertical"></i>
                        <h3 className="text-lg font-semibold">{item.cardTitle}</h3>
                        <h4 className="text-md">{item.cardSubtitle}</h4>
                        <p>{item.cardDetailedText}</p>
                        <img src="https://fontawesome.com/icons/square-poll-vertical?f=classic&s=solid"/>
                        
                        {item.showPosterIcon && (
                         <img src="https://fontawesome.com/icons/square-poll-vertical?f=classic&s=solid"/>
                            //<FontAwesomeIcon icon="fa-solid fa-square-poll-vertical" />
                        )}
                        
                    </div> }}
                  */}
                  
               
                 
             </Chrono>

        </div>
       


    );
};

export default Timeline