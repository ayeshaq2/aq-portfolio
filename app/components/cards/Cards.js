
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack} from '@chakra-ui/react'


/**
 * Card created using the library from ChakraUI
 * https://chakra-ui.com/docs/components/card/usage 
 */ 


let projects = [
    {
        name:"Memory Lane",
        date:"November 2023",
        technologies:['a','b','c'],
        award:"Sunlife's Best Health Hack @ Hack Western 10",
        description:"Project at hackathon",
        github:"link",
        exefile:"",
        devpost:"",
        photo:"",

    },
    {
        name:"Memory Lane",
        date:"November 2023",
        award:"Sunlife's Best Health Hack @ Hack Western 10",
        description:"Project at hackathon"

    },
    {
        name:"Memory Lane",
        date:"November 2023",
        award:"Sunlife's Best Health Hack @ Hack Western 10",
        description:"Project at hackathon"

    }
]


const Cards = () =>{
    return(
        projects.forEach( (project) =>{
            <Card maxW="sm">
                <CardBody>
                    <img src="../.images/poster.png"/>

                    <Stack mt='6' spacing='3'>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>

                       {project.award &&(
                         <p className='text-blue text-xl'>{project.award}</p>

                       )}


                    </Stack>


                </CardBody>




            </Card>
        }

        )


    )
}

export default Cards