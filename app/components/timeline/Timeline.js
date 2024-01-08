import React from 'react'
import {Chrono} from "react-chrono";
import {Poster} from '.././Icons/icons.js'
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
    cardDetailedText:"Working in AI ",
    showPosterIcon: true,
    media:{
        name:"Research Poster - Summer Term conclusion",
        source:{
            url:'.././images/hackers.jpg'
        },
        type: 'ICON'
    }

    
    

},

{
    title:"Sept - Dec 2022",
    cardTitle:"RBC Design Thinking Program Member - London, Canada",
    cardSubtitle:"Royal Bank of Canada",
    cardDetailedText:"Figma" , 
},

{
    title:"May - Aug 2022",
    cardTitle:"Social Media Community Manager",
    cardSubtitle:"Northwest London Resource Center - London, Canada",
    cardDetailedText:"Summer camp"
},

]


const Timeline =() =>{
    return(
        <div className='w-5/6 pt-5' >
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
                <div className='p-5'>
                    <Link href="https://www.google.com">
                        <img src=".././images/hackers.jpg"/>
                        
                    </Link>
                    
                    {/* <Link href="https://www.instagram.com"><a>123</a></Link> */}
                    
                </div>
               

                <div>
                    two
                </div>


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