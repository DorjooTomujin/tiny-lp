import { VStack, Container, Heading, Box, Image, Text, Button } from "@chakra-ui/react";

import { BoyArt, BoyWithCard, FlowerGirl, Girl, NokiaBoy, RobotArt, SwordBoy } from "../src/components/utils/arts";

export default function Home() {
  return (
    <VStack>
      <Box overflow={'hidden'} pos='relative' height='100vh' bgPos={'center'} bgRepeat='no-repeat' bgSize={'cover'} w={'full'} bgImage={"/assets/img/clouds/cloud1.svg"} display='flex' justifyContent={'center'} alignItems='center'>
        <Box pos={'absolute'} bottom='25%' left={'10%'} >
          <BoyArt />
        </Box>
        <Box pos={'absolute'} bottom='25%' right={'10%'}>
          <RobotArt />
        </Box>
        <Box pos={'absolute'} top='5%' left={'15%'}>
          <NokiaBoy />
        </Box>
        <Box pos={'absolute'} top='8%' right={'28%'}>
          <Girl />
        </Box>
        <Box pos={'absolute'} top='20%' right={'15%'}>
          <SwordBoy />
        </Box>
        <Box pos={'absolute'} top='30%' left={'30%'}>
          <FlowerGirl />
        </Box>
        <VStack mx='auto' maxW={'18%'}>
            <Image src="/assets/img/tiny-logo.svg"/>
            <Text lineHeight={1.1} fontWeight='600' textAlign={'center'}>Tiny Battle is a world where everyone is constantly playing, learning and earning. There are always many battles in Tiny World.</Text>
            <Box h={'10vh'}/>
            <Button bg={'pink.main'} fontWeight={'bold'} fontSize={'20px'} borderRadius={12} py={8} px={10} color='white'><Image mr={3} src='/assets/img/discord.svg'/> Join Discord</Button>
            <Box h={2}/>
            <Text color={'purple.main'}   textShadow=' -3px 3px 0 #fff,
                          3px 3px 0 #fff,
                         3px -3px 0 #fff,
                        -3px -3px 0 #fff;' fontWeight='bold' fontSize={'24px'} >Soft Launch Mongolia</Text>
        </VStack>
      </Box>
    </VStack>
  );
}
