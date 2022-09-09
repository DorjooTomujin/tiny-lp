import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { DefaultBtn } from "./utils/buttons";

export default function Footer  ()  {
    return (
        <Box w={'100%'} bg={'purple.primary'}>
            <HStack pos={'relative'} justifyContent={'space-between'} mx='auto' maxW={'1500px'} px={4} color='white' textAlign={'start'} py={'80px'} alignItems='start'>
                <VStack>
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
                <VStack gap={5} alignItems={'start'} pt={'50px'}>
                    <Link _hover={{textDecoration:'none'}} fontWeight={'600'}>Home</Link>
                    <Link _hover={{textDecoration:'none'}}>About us</Link>
                    <Link _hover={{textDecoration:'none'}}>Gameplay</Link>
                    <Link _hover={{textDecoration:'none'}}>Token</Link>
                </VStack>
                <VStack gap={5} alignItems={'start'} pt={'50px'}>
                    <Link _hover={{textDecoration:'none'}} fontWeight={'600'}>Whitepaper</Link>
                    <Link _hover={{textDecoration:'none'}}>1.0</Link>
                </VStack>
                <VStack gap={5} alignItems={'start'} pt={'50px'}>
                    <Link _hover={{textDecoration:'none'}} fontWeight={'600'}>Social channels</Link>
                    <Link _hover={{textDecoration:'none'}}>Instagram</Link>
                    <Link _hover={{textDecoration:'none'}}>Tik Tok</Link>
                    <Link _hover={{textDecoration:'none'}}>Twitter</Link>
                </VStack>
                <Box pos={'relative'} h={'full'} display={'flex'} sx={{margin: 'auto 0 !important'}} ><DefaultBtn icon='' text={'Join Discord'} bg={'pink.main'}/></Box>

            </HStack>
        </Box>
    )
}