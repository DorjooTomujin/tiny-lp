import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import {FaTiktok} from 'react-icons/fa'
import { DefaultBtn } from "./utils/buttons";

export default function Footer  ()  {
    return (
        <Box w={'100%'} bg={'purple.primary'}>
            <HStack pos={'relative'} justifyContent={'space-between'} mx='auto' maxW={'1500px'} px={4} color='white' textAlign={'start'} py={['40px', '40px', '80px','80px','80px']} alignItems='start' gap={5}>
                <VStack flex={1}>
                    <Box>
                        <Image src="/assets/img/tiny-logo.svg"/>
                    </Box>
                    <HStack>
                        <Text color='white' ml={1}>
                            Powered by:
                        </Text>
                        <Box><Image src="/assets/img/elf-logo-white.svg"/></Box>
                    </HStack>
                </VStack>
                <VStack gap={5} alignItems={'start'} pt={'50px'} display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                    <Link _hover={{textDecoration:'none'}} fontWeight={'600'}>Home</Link>
                    <Link _hover={{textDecoration:'none'}} href='#about'>About us</Link>
                    <Link _hover={{textDecoration:'none'}} href='#gameplay'>Gameplay</Link>
                    <Link _hover={{textDecoration:'none'}} href='#token'>Token</Link>
                </VStack>
                <VStack gap={5} alignItems={'start'} pt={'50px'}  display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                    <Link _hover={{textDecoration:'none'}} fontWeight={'600'}>Whitepaper</Link>
                    <Link _hover={{textDecoration:'none'}}>1.0</Link>
                </VStack>
                <VStack gap={5} alignItems={'start'} pt={'50px'}  display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}>
                    <Link _hover={{textDecoration:'none'}} fontWeight={'600'}>Social channels</Link>
                    <Link _hover={{textDecoration:'none'}} href='https://www.instagram.com/tiny.battle.game/'>Instagram</Link>
                    <Link _hover={{textDecoration:'none'}}>Tik Tok</Link>
                    <Link _hover={{textDecoration:'none'}} href='https://twitter.com/TinyBattle_game'>Twitter</Link>
                </VStack>
                <Box pos={'relative'} h={'full'} display={'flex'} alignItems='center' flexDir='column' sx={{margin: 'auto 0 !important'}} flex={1}>
                    <DefaultBtn icon='' text={'Join Discord'} bg={'pink.main'} href={'https://discord.gg/J6w2XKwX'}/>
                    <HStack gap={[4,10,8,10,10]} alignItems={'start'} pt={'30px'} display={['flex', 'flex', 'none', 'none', 'none', 'none']}>

                    <Link _hover={{textDecoration:'none'}} fontSize={'20px'}><AiOutlineInstagram/></Link>
                    <Link _hover={{textDecoration:'none'}} fontSize={'20px'}><FaTiktok/></Link>
                    <Link _hover={{textDecoration:'none'}} fontSize={'20px'}><AiOutlineTwitter/></Link>
                </HStack>
                </Box>

            </HStack>
        </Box>
    )
}