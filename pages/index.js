import {
  VStack,
  Container,
  Heading,
  Box,
  Image,
  Text,
  Button,
  HStack,
  Grid,
  GridItem,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

import {
  BoyArt,
  BoyWithCard,
  Card,
  FlowerGirl,
  Girl,
  NokiaBoy,
  RobotArt,
  Star,
  SwordBoy,
} from "../src/components/utils/arts";
import { DefaultBtn } from "../src/components/utils/buttons";
import { BoxCard, ButtonCard, DefaultCard, GridCard, ReadCard } from "../src/components/utils/cards";
import { Title } from "../src/components/utils/title";

const actList = [
  'ELFC Initial Coin Offering in Mongolia'
]
const starList = [
  'Tiny Battle - Pitch Deck at Global Education Forum 2022', 
  'Tiny Battle - MVP at Amcham Digital Economy Event (sponsors: Polygon, Chainanalysis)'
]

const swordList = [
  'Tiny Journey & Battle - Demo Launch in Mongolia (10000 users)',
  'Tiny Battle - Version 1.0 soft launch in Mongolia',
  'Tiny Olympiads - First ever gamified English Olympiad'
]

const journeyList = [
  'Tiny Journey - All K12 subjects on Tiny Journey & Battle',
  'Tiny Olympiads - All K12 subjects Global Olympiad'
]
const earthList = [
  'Tiny Verse - Land ownership & custom battle creation'
]

const ChakraBox = chakra(motion.div, {

  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const bounceValue = {
  duration: 0.1,
  yoyo: 3,
  ease: "easeOut"
};

export default function Home() {
  return (
    <VStack bgPos={'center'} zIndex={10} pos={'relative'} bgRepeat={'no-repeat'} bgSize={'cover'} bgImage={'/assets/img/clouds/cloud2.svg'}>
      <ChakraBox

        overflow={"hidden"}
        pos="relative"
        h={'130vh'}
        zIndex={'100'}
        bgPos={"center"}
        bgRepeat="no-repeat"
        bgSize={"cover"}
        w={"full"}
        bgImage={"/assets/img/clouds/cloud1.svg"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <ChakraBox animate={{left: '10%' , top: '50%'}} transition={{delay: 0.5, duration: 0.5}} initial={{left: '-1000px', top: '200%'}} pos={"absolute"}  >
          <BoyArt />
        </ChakraBox>
        <ChakraBox animate={{left: '80%' , top: '50%'}} transition={{delay: 0.5, duration: 0.5}} initial={{left: '200%', top: '200%'}} pos={"absolute"} >
          <RobotArt />
        </ChakraBox>
        <ChakraBox animate={{left: '15%' , top: '8%'}} transition={{delay: 1, duration: 0.5}} initial={{left: '-200%', top: '-200%'}} pos={"absolute"} >
          <NokiaBoy />
        </ChakraBox>
        <ChakraBox animate={{left: '70%' , top: '10%'}} transition={{delay: 1, duration: 0.5}} initial={{left: '200%', top: '200%'}}  pos={"absolute"} >
          <Girl />
        </ChakraBox>
        <ChakraBox animate={{left: '75%' , top: '20%'}} transition={{delay: 1.5, duration: 0.5}} initial={{left: '200%'}}  pos={"absolute"} >
          <SwordBoy size={"5vw"} />
        </ChakraBox>
        <ChakraBox animate={{left: '30%' , top: '30%'}} transition={{delay: 1.5, duration: 0.5}} initial={{left: '-150%'}}  pos={"absolute"} >
          <FlowerGirl size={"5vw"} />
        </ChakraBox>
        <VStack mx="auto" maxW={"18%"}>
          <ChakraBox animate={{scale: 1, opacity: 1}} initial={{scale: 0.1, opacity: 0.1}}><Image src="/assets/img/tiny-logo.svg" /></ChakraBox>
          <ChakraBox animate={{x: '0', opacity: 1}} initial={{x:'-100%' ,opacity: 0}} transition={{delay: 0.5}}><Text lineHeight={1.1} fontWeight="600" textAlign={"center"}>
            Tiny Battle is a world where everyone is constantly playing,
            learning and earning. There are always many battles in Tiny World.
          </Text></ChakraBox>
          <Box h={"10vh"} />
          <ChakraBox animate={{x: '0', opacity: 1}} initial={{x:'100%' ,opacity: 0}} transition={{delay: 1}}>
          <DefaultBtn text={"Join Discord"} bg="pink.main" icon="discord.svg" href={'https://discord.gg/J6w2XKwX'}  />
          </ChakraBox>
          <Box h={2} />
          <ChakraBox animate={{x: '0', opacity: 1}} initial={{x:'100%' ,opacity: 0}} transition={{delay: 1}}>

          <Text
            color={"purple.main"}
            textShadow=" -3px 3px 0 #fff,
            3px 3px 0 #fff,
            3px -3px 0 #fff,
            -3px -3px 0 #fff;"
            fontWeight="bold"
            fontSize={"24px"}
            >
            Soft Launch Mongolia
          </Text>
            </ChakraBox>
        </VStack>
      </ChakraBox>
      <VStack maxW={"1200px"} id={'about'} py={20}>
        <ButtonCard />
        <Box py={20} />
        <ChakraBox whileInView={{y: 100, scale: 1}} initial={{y: 0,scale: 0.1}} transition={{y: bounceValue}}>
        <Image src="/assets/img/boyWithCoin.svg" />
        </ChakraBox>
      </VStack>
      <VStack maxW={"1200px"} py={20}>
        <DefaultCard
          heading={"Fight your friends with your knowledge!"}
          text={
            "It will be most exciting to compete with the best kids and your friends in your class by betting on your knowledge."
          }
          icon={"swords"}
        />
        <HStack
          w={"full"}
          justifyContent="space-between"
          px={16}
          pos="relative"
          transform={"translateY(-40%)"}
        >
          <ChakraBox whileInView={{x:0 ,y: 0, scale: 1}} initial={{x:-300, y: 20,scale: 0.8}} transition={{y: bounceValue}}>
            <FlowerGirl size={"10vw"} />
          </ChakraBox>
          <ChakraBox whileInView={{x:0 ,y: 0, scale: 1}} initial={{x:300, y: 20,scale: 0.8}} transition={{y: bounceValue}}>
            <SwordBoy size={"7vw"} />
          </ChakraBox>
        </HStack>
      </VStack>
      <VStack maxW={"1200px"} py={20}>
        <DefaultCard
          heading={"Confirmed by learning objectives"}
          text={
            "All of the questions you face meet international learning objective standards. So the knowledge you learn from your game will be valued in real life."
          }
          icon={"book"}
        />
        <HStack
          w={"full"}
          justifyContent="space-between"
          px={16}
          pos="relative"
          transform={"translateY(-65%)"}
        >
          <Box>
            <ChakraBox whileInView={{opacity:1, x: '10%', scale: 1}} initial={{opacity: 0.1, scale: 0.1}} transition={{delay: 0.3}} >
              <Star num="" />
            </ChakraBox>
            <Box h={10} />
            <ChakraBox whileInView={{opacity:1,x: '-60%',scale: 1}} initial={{opacity: 0.1, scale: 0.1 , x: '-60%',}} transition={{delay: 0.6}}>
              <Star num={"2"} />
            </ChakraBox>
            <ChakraBox whileInView={{opacity:1, scale: 1, x: '50%',}} initial={{opacity: 0.1, scale: 0.1, x: '50%',}} transition={{delay: 0.9}}>
              <Star num={"3"} />
            </ChakraBox>
          </Box>
          <Box>
            <ChakraBox whileInView={{opacity:1, scale: 1, x: '115%'}} initial={{opacity: 0.1, x: '115%', scale: 0.1}} transition={{delay: 0.3}}>
              <Star num={"1"} />
            </ChakraBox>
            <Box h={16} />
            <Box>
              <Image src="/assets/img/studentBoy.svg" />
            </Box>
          </Box>
        </HStack>
      </VStack>
      <VStack maxW={"1200px"}>
        <DefaultCard
          heading={"Fully equip yourself with the tokens you have won."}
          text={
            "Each time you win a battle, you will be rewarded with an ELFC token. With the winning token, you can get your weapons, clothes, protection and skill cards from our marketplace and equip yourself."
          }
          icon={"coin"}
        />
        <HStack
          w={"full"}
          justifyContent="space-between"
          px={16}
          pos="relative"
          transform={"translateY(-60%)"}
        >
          <ChakraBox whileInView={{opacity:1, scale: 1, x: '-30%'}} initial={{opacity: 0.1, x: '-30%', scale: 0.1}} transition={{delay: 0.3}} transform={"translateX(-30%)"}>
            <Card size={"13vw"} card={"main"} />
          </ChakraBox>
          <ChakraBox>
            <ChakraBox whileInView={{opacity:1, scale: 1, x: '-20%'}} initial={{opacity: 0.1, x: '-20%', scale: 0.1}} transition={{delay:'0.3'}}>
              <Card card={"fastfood"} size={"5vw"} />
            </ChakraBox>
            <ChakraBox whileInView={{opacity:1, scale: 1, x: '55%'}} initial={{opacity: 0.1, x: '55%', scale: 0.1}} transition={{delay:'0.6'}}>
              <Card card={"cloth"} size={"7vw"} />
            </ChakraBox>
            <ChakraBox whileInView={{opacity:1, scale: 1, x: '-40%'}} initial={{opacity: 0.1, x: '-40%', scale: 0.1}} transition={{delay:'0.9'}}>
              <Card card={"cactus"} size={"4vw"} />
            </ChakraBox>
            <ChakraBox whileInView={{opacity:1, scale: 1, x: '-130%', y:'-100%'}} initial={{opacity: 0.1, x: '-130%', y:'-100%', scale: 0.1}} transition={{delay:'1.2'}}>
              <Card card={"nokia"} size={"3vw"} />
            </ChakraBox>
          </ChakraBox>
        </HStack>
      </VStack>
      <VStack id={'gameplay'} maxW={"1000px"} pb={20} px={12}>
        <Title title={"Gameplay"} />
        <Box h={10} />
        <Box w={"100%"} borderRadius={12} overflow="hidden">
          <video poster="/assets/img/videobg.svg" controls>
            <source src="/assets/video/video1.mp4" type="video/mp4" />
          </video>
        </Box>
      </VStack>
      <VStack id={'token'} maxW={"1200px"} py={20}>
          <BoxCard/>
      </VStack>
      <VStack id={'roadmap'} maxW={'90%'} py={20}>
          <Title title={'Roadmap'}/>
          <Box h={10} />
          <Grid gridTemplateColumns={'repeat(5, 1fr)'} gap={10}>
            <GridItem>
              <GridCard icon={'ark'} text1={'Q4'} text2={'2021'} list={actList} index={0}/>
            </GridItem>
            <GridItem>
              <GridCard icon={'starCircle'} text1={'Q2'} text2={'2022'} list={starList} index={1}/>
            </GridItem>
            <GridItem>
              <GridCard icon={'swordCircle'} text1={'Q4'} text2={'2022'} list={swordList} index={2}/>
            </GridItem>
            <GridItem>
              <GridCard icon={'journey'} text1={'Q4'} text2={'2022'} list={journeyList} index={3}/>
            </GridItem>
            <GridItem>
              <GridCard icon={'earth'} text1={'Q3'} text2={'2024'} list={earthList} index={4}/>
            </GridItem>
          </Grid>
      </VStack>
      <VStack alignItems={'start'} maxW={'1500px'} px={4} mx='auto' pt={20} pb={40}>
        <Title title={'Read Our News'}/>
        <Box h={10}/>
        <Grid gap={6} gridTemplateColumns={'repeat(4, 1fr)'}>
          <GridItem>
            <ReadCard img={'news1.png'} title='Don’t destroy greenery and don’t spoil scenery' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'} href={'https://www.instagram.com/p/CiAFtHYrcxf/'}/>
          </GridItem>
          <GridItem>
            <ReadCard img={'news2.png'} title=' Is climate change happening faster than expected?' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'} href={'https://www.instagram.com/p/Ch4E_kvr0ug/'}/>
          </GridItem>
          <GridItem>
            <ReadCard img={'news3.png'} title='Top 10 facts about wind farms you didn&#39;t know' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'} href={'https://www.instagram.com/p/Chtn6JOrTpK/'}/>
          </GridItem>
          <GridItem>
            <ReadCard img={'news4.png'} title='Our goal is to make water available for everyone' text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim'} href={'https://www.instagram.com/p/ChgjZ4vNzjS/'}/>
          </GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
}
