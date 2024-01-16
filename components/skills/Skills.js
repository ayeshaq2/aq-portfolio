import React,{useEffect, useState} from 'react'
import {Box, Tag} from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import './Skills.css'




let skills=['Java', 'Javascript','Next.js','React.js','JavaFX','Python','C++','AWS','MySQL','SQL','MongoDB','NLP','HTML/CSS', 'Pygame', 'OOP', 'Express', 'JWT', 'Git','Agile']


const Skills = () => {

    const [bubbleStyles, setBubbleStyles] = useState([]);

    useEffect(() => {
        const generateStyles = skills.map(() => ({
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            animationDuration: `${Math.random() * 5 + 4}s`, 
        }));
        setBubbleStyles(generateStyles);
    }, [skills]);

    useEffect(() => {
        const handleCollision = () => {
            const updatedStyles = [...bubbleStyles];

            updatedStyles.forEach((bubble, index) => {
                
                updatedStyles.forEach((otherBubble, otherIndex) => {
                    if (index !== otherIndex) {
                        const deltaX = bubble.left - otherBubble.left;
                        const deltaY = bubble.top - otherBubble.top;
                        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                        
                        if (distance < 40) {
                            const angle = Math.atan2(deltaY, deltaX);
                            const moveDistance = 80 - distance;

                            bubble.left += moveDistance * Math.cos(angle);
                            bubble.top += moveDistance * Math.sin(angle);
                        }
                    }
                });
            });

            setBubbleStyles(updatedStyles);
        };

       
        window.addEventListener('resize', handleCollision);

       
        return () => {
            window.removeEventListener('resize', handleCollision);
        };
    }, [bubbleStyles]);

    return (
        <Box className='skills-container'>
            {console.log("rendering")}
             {/* <div>pppppppppppppppppppppppppppp</div> */}
            {skills.map((skill, index)=>(
                <Tag key={index} className='skill-bubble text-black sm:text-black' style={bubbleStyles[index]}>{skill}</Tag>
            ))}
        </Box>

    )
}

export default Skills;