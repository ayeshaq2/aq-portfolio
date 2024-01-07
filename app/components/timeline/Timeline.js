import React from 'react'
import {Chrono} from "react-chrono";
import {Poster} from '.././Icons/icons.js'

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
            url: "https://drive.google.com/file/d/1S37MLLszvAYqw6e5T2OEtfiHqN6Y5xSe/view?usp=drive_link"
        },
        type: 'IMAGE'
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
             <Chrono items={experiences} mode="VERTICAL_ALTERNATING" enableOutline theme={{
                primary:"black",
                secondary:'transparent', 
                titleColor:'black',
                titleColorActive:'black',
                cardSubtitleColor:'black',
                cardTitleColor:"purple"


             }}

             >
                 {(item, idx) => {
                    console.log(item);
                   
                    <div className="p-4">
                        <i class="fa-solid fa-square-poll-vertical"></i>
                        <h3 className="text-lg font-semibold">{item.cardTitle}</h3>
                        <h4 className="text-md">{item.cardSubtitle}</h4>
                        <p>{item.cardDetailedText}</p>
                        
                        {/* Conditionally render the Poster icon */}
                        {item.showPosterIcon && (
                         <i class="fa-solid fa-square-poll-vertical"></i>
                            //<FontAwesomeIcon icon="fa-solid fa-square-poll-vertical" />
                        )}
                    </div>
                 }}
               
                 
             </Chrono>

        </div>
       


    );
};

export default Timeline