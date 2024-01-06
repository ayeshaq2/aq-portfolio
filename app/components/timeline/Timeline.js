import React from 'react'
import {Chrono} from "react-chrono";

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
    cardDetailedText:"Working in AI"
},

{
    title:"Sept - Dec 2022",
    cardTitle:"RBC Design Thinking Program Member - London, Canada",
    cardSubtitle:"Royal Bank of Canada",
    cardDetailedText:"Figma"
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
        <div className='w-5/6' >
             <Chrono items={experiences} mode="VERTICAL_ALTERNATING" enableOutline theme={{
                primary:"black",
                secondary:'transparent', 
                titleColor:'black',
                titleColorActive:'black',
                cardSubtitleColor:'black',
                cardTitleColor:"purple"


             }}

             >
                        {/* {(item, idx) => (
                            <div
                            className={`${
                                idx % 2 === 0 ? "bg-primary" : "bg-secondary"
                            } chrono-default-content`}
                            >
                            <div className="text-white text-lg font-semibold mb-2">
                                {item.title}
                            </div>
                          
                            </div>
                        )} */}
                
             </Chrono>

        </div>
       


    );
};

export default Timeline