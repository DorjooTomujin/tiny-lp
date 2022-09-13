import { Box, Button, HStack, Image, Link } from "@chakra-ui/react";
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
export default function Navbar () {
    return (
        <Box bg={'purple.primary'} position='fixed' top={0} zIndex={101} w={'100%'}> 
            <HStack maxW={'1500px'} justifyContent={'space-between'} mx='auto' py={3}  w={'full'} color='white' px={4}>  
            <HStack gap={6} >
                <Link href={'/'} _hover={{textDecoration: 'none'}}><Image src="/assets/img/tiny-minilogo.svg"/></Link>
                <Link href={'#about'}  _hover={{textDecoration: 'none', }} display={['none', 'none', 'none', 'flex', 'flex']}>About</Link>
                <Link href="#token" _hover={{textDecoration: 'none'}} display={['none', 'none', 'none', 'flex', 'flex']}>Token</Link>
                <Link href='#gameplay' _hover={{textDecoration: 'none'}} display={['none', 'none', 'none', 'flex', 'flex']}>Gameplay</Link>
                <Link href={'#roadmap'}  _hover={{textDecoration: 'none'}} display={['none', 'none', 'none', 'flex', 'flex']}>Roadmap</Link>
            </HStack>
             <HStack gap={6}>
                <Button variant={'outline'} borderColor='#fff' _hover={{bg: 'purple.primary'}} display={['none', 'flex', 'flex', 'flex', 'flex']}>
                    Whitepaper
                </Button>
                <HStack gap={2}>
                <Link href={'https://twitter.com/TinyBattle_game'} target={'_blank'}><AiOutlineTwitter size={25}/></Link>
                <Link href={'https://www.instagram.com/tiny.battle.game/'} target='_blank'><AiOutlineInstagram size={25}/></Link>
                </HStack>
             </HStack>

</HStack>
        </Box>
    )
} 