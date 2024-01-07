
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Button, ButtonGroup, Divider} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'


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
        <div className='ms-8 w-3/4 relative grid grid-cols-2 gap-10 justify-center' >

       { projects.map( (project, index) =>(
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='6'>
        <Card key={index}  className=" w-50 border border-red-800 flex flex-col-relative min-w-0 w-25 bg-white px-4 py-2 rounded-md justify-center" style={{ margin: '8px' }} >
              <img src=".././images/poster.png"/>
            <CardHeader className="mb-4 flex justify-center">
                <h2 className="text-red-600 text-2xl font-bold py-4 px-4 relative justify-center" >{project.name}</h2>
            </CardHeader>
        <CardBody className="text-gray-700 px-4 py-1">
            <Stack mt='6' spacing='3'>
            <p>{project.description}</p>
            <p className='text-blue-400 text-xl'>
                $450
            </p>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter  className="align-right justify-right items-right py-4">
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
            </SimpleGrid>
       
    ))}
        </div>)
}

export default Cards