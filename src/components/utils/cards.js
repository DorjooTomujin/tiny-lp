import { border, Box, chakra, Heading, HStack, Image, Link, List, ListIcon, ListItem, shouldForwardProp, Text, VStack } from "@chakra-ui/react"
import { DefaultBtn } from "./buttons"
import {BsFillCircleFill} from 'react-icons/bs'
import { isValidMotionProp, motion } from "framer-motion";
const ChakraBox = chakra(motion.div, {

    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  
export const ButtonCard = () => {
    return (
        <ChakraBox whileInView={{opacity: 1, scale: 1, }} initial={{opacity: 0, scale: 0.6}} transition={{type: "spring", duration: 0.8}} viewport={{once: true}} border={'1px #C5C5C5 solid'} pb={20} pt={12} px={[5,5,24,24,24]} borderRadius={30} mx="auto" maxW={'1000px'} w={'full'} pos='relative'>
            <Heading textAlign={'center'} w={['100%','100%','70%','70%','70%']} mx='auto' fontWeight={700} fontSize={'32px'}>Play a battle game to learn.
            </Heading>
            <Heading w={['100%','100%','70%','70%','70%']} mx='auto' textAlign={'center'} mb={8} fontWeight={700} fontSize={'32px'}>
                Earn real life and virtual rewards for learning.</Heading>
            <Text textAlign={'center'} w={['100%','100%','70%','70%','70%']} mx='auto'>You can play TinyBattle, fight monsters in many disciplines, win and be rewarded with cryptocurrency.</Text>
            <Box pos={'absolute'} bottom='0%' transform={'translate(-50%, 50%)'} left='50%'><DefaultBtn text={'Whitepaper'} bg='pink.main' icon='' /></Box>
        </ChakraBox>
    )
}

export const DefaultCard = ({heading, text, icon}) => {
    return (
        <ChakraBox whileInView={{opacity: 1, scale: 1, }} initial={{opacity: 0, scale: 0.6}} transition={{type: "spring", duration: 0.8}} viewport={{once: true}} border={'1px #C5C5C5 solid'} pb={12} pt={20} px={[5,5,24,24,24,24]} borderRadius={30} mx="auto" maxW={'1000px'}  w={['calc(100vw - 3.5rem)', 'calc(100vw - 3.5rem)', 'calc(100vw - 3.5rem)', 'calc(100vw - 3.5rem)','1000px','1000px']} pos='relative'>
            <Heading maxW={'450px'}  textAlign={'center'} fontWeight={700} fontSize={'32px'}mx='auto' >{heading}
            </Heading>
            <Box h={10}/>
            <Text textAlign={'center'} maxW={'450px'}  mx='auto'>{text}</Text>
            <Box pos={'absolute'} top='0%' transform={'translate(-50%, -50%)'} left='50%'>
                <Image src={`/assets/img/${icon}.svg`}/>
            </Box>
        </ChakraBox>
    )
}

export const BoxCard = ({}) => {
    return (
        <ChakraBox whileInView={{opacity: 1, scale: 1, }} initial={{opacity: 0, scale: 0.6}} transition={{type: "spring", duration: 0.8}} viewport={{once: true}} display={'flex'} alignItems='center' border={'1px #C5C5C5 solid'}  px={[5,5,5,5,12,12]} py={[8,8,8,8,0,0]} borderRadius={30} mx="auto" maxW={'1000px'} flexDir={['column', 'column', 'row', 'row', 'row']} w={['auto', 'auto', 'auto', 'auto','1000px','1000px' ]} pos='relative' gap={20}>
            <Box flex={1}>
                <HStack justifyContent={'space-between'}>
                    <Text>Powered by:</Text>
                    <Box w={'50%'}><Image src="/assets/img/elf-logo.svg" /></Box>
                </HStack>
                <Text mt={10}>To make education more inclusive, your prize in TinyBattle will be an ELF coin from Elf Education.</Text>
            </Box>
            <Box flex={1}>
                <Box transform={'translate(10%, -10%) scale(1.25)'}>
                    <Image src="/assets/img/arkWithCoin.svg"/>
                </Box>

            </Box>
        </ChakraBox>
    )
}

export const GridCard = ({icon, text1, text2, list, index}) => {
    return (
        <ChakraBox whileInView={{opacity: 1, scale: 1, }} initial={{opacity: 0, scale: 0.6}} transition={{type: "spring", duration: 0.8, delay: 0.3*index}} viewport={{once: true}}  maxW={'250px'} mx={'auto'} display='flex' flexDir={'column'} alignItems='center'>
            <Box w={'150px'} h={'150px'} display='flex' alignItems={'center'}>
                <Image src={`/assets/img/${icon}.svg`}/>
            </Box>
            <Box borderRadius={12} py={4} textAlign='center'
            w={'full'}  color='white' fontSize={'24px'} fontWeight='bold' bg='purple.main'>
                {text1}&nbsp;&nbsp;&nbsp;&nbsp;{text2}
            </Box>
            <Box h={4}/>
            <List spacing={3} >
                {list && list.map((l, i) => {
                    return (
                        <ListItem key={i}>
                            <HStack alignItems={'start'}>

                            <Box>
                            <BsFillCircleFill color={index < 2 ? '#55C595' :'#EF518B' } fontSize={'24px'} />
                            </Box>
                            
                           <Text pl={2}> {l}</Text>
                            </HStack>
                        </ListItem>
                    )
                })}

            </List>
        </ChakraBox>
    )
}

export const ReadCard = ({img, title, text, href}) => {
    return (
        <Link href={href} _hover={{textDecor:'none'}} target={'_blank'}>
            <Box borderRadius={8} overflow='hidden' w={'full'}>
                <Image src={`/assets/img/${img}`} objectFit={'cover'} w={'full'}/>
            </Box>
            <Text mb={2} mt={4} fontSize={'20px'} color={'black.main'}>{title}</Text>
            <Text  color={'gray.main'}>{text}</Text>
        </Link>
    )
}