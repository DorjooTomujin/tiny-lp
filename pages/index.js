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
  AspectRatio,
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
import {
  BoxCard,
  ButtonCard,
  DefaultCard,
  GridCard,
  ReadCard,
} from "../src/components/utils/cards";
import { Title } from "../src/components/utils/title";

const actList = ["ELFC Initial Coin Offering in Mongolia"];
const starList = [
  "Tiny Battle - Pitch Deck at Global Education Forum 2022",
  "Tiny Battle - MVP at Amcham Digital Economy Event (sponsors: Polygon, Chainanalysis)",
];

const swordList = [
  "Tiny Journey & Battle - Demo Launch in Mongolia (10000 users)",
  "Tiny Battle - Version 1.0 soft launch in Mongolia",
  "Tiny Olympiads - First ever gamified English Olympiad",
];

const journeyList = [
  "Tiny Journey - All K12 subjects on Tiny Journey & Battle",
  "Tiny Olympiads - All K12 subjects Global Olympiad",
];
const earthList = ["Tiny Verse - Land ownership & custom battle creation"];

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const bounceValue = {
  duration: 0.1,
  yoyo: 3,
  ease: "easeOut",
};

export default function Home() {
  return (
    <VStack
      bgPos={"center"}
      overflow="hidden"
      zIndex={10}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <ChakraBox
        overflow={"hidden"}
        pos="relative"
        h={"100vh"}
        zIndex={"100"}
        top={0}
        w={"100vw"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box>
          <Box
            pos={"absolute"}
            inset={0}
            overflow="hidden"
            zIndex="-1"
            w="full"
            h="full"
          >
            <Image
              src="/assets/img/clouds/cloud1.svg"
              objectFit={"cover"}
              w="full"
              h="full"
            />
          </Box>
          <ChakraBox
            animate={{
              left: "calc(37% - 10vw - 15vh)",
              top: "calc(80% - 15vw)",
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            initial={{ left: "-1000px", top: "200%" }}
            pos={"absolute"}
          >
            <BoyArt />
          </ChakraBox>
          <ChakraBox
            animate={{ left: "calc(55% + 20vw )", top: "calc(80% - 15vw)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            initial={{ left: "200%", top: "200%" }}
            pos={"absolute"}
          >
            <RobotArt />
          </ChakraBox>
        </Box>
        <ChakraBox
          animate={{ left: "15%", top: "8%" }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          initial={{ left: "-200%", top: "-200%" }}
          pos={"absolute"}
        >
          <NokiaBoy />
        </ChakraBox>
        <ChakraBox
          animate={{ left: "70%", top: "10%" }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
          initial={{ left: "200%", top: "200%" }}
          pos={"absolute"}
        >
          <Girl />
        </ChakraBox>
        <ChakraBox
          animate={{ left: "75%", top: "calc(30% - 5vw)" }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.5 }}
          initial={{ left: "200%" }}
          pos={"absolute"}
        >
          <SwordBoy size={["20vw", "13vw", "10vw", "8vw", "5vw"]} />
        </ChakraBox>
        <ChakraBox
          animate={{ left: "calc(37%  - 15vh)", top: "calc(35% - 5vw)" }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.5 }}
          initial={{ left: "-150%" }}
          pos={"absolute"}
        >
          <FlowerGirl size={["20vw", "13vw", "10vw", "8vw", "5vw"]} />
        </ChakraBox>
        <VStack mx="auto" maxW={["80%", "55%", "35%", "30%", "18%"]}>
          <ChakraBox
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.1, opacity: 0.1 }}
          >
            <Image src="/assets/img/tiny-logo.svg" />
          </ChakraBox>
          <ChakraBox
            animate={{ x: "0", opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Text lineHeight={1.1} fontWeight="600" textAlign={"center"}>
              Tiny Battle -- a mobile game that gets you into the next version of you. Play, so you can learn and earn at the same time!
            </Text>
          </ChakraBox>
          <Box h={["3vh", "5vh", "8vh", "10vh", "10vh"]} />
          <ChakraBox
            animate={{ x: "0", opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <DefaultBtn
              text={"Join Our Community"}
              bg="pink.main"
              icon="discord.svg"
              href={"https://discord.gg/J6w2XKwX"}
            />
          </ChakraBox>
          <Box h={2} />
          <ChakraBox
            animate={{ x: "0", opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <Text
              color={"purple.main"}
              textShadow=" -3px 3px 0 #fff,
            3px 3px 0 #fff,
            3px -3px 0 #fff,
            -3px -3px 0 #fff;"
              fontWeight="bold"
              fontSize={"24px"}
              whiteSpace="nowrap"
            >
              Launching in October 2022
            </Text>
          </ChakraBox>
        </VStack>
      </ChakraBox>

      <Image
        src="/assets/img/clouds/cloud2.svg"
        display={["none", "none", "none", "block", "block"]}
        pos={"absolute"}
        bottom={0}
        top={[
          "calc(100vh - 15px)",
          "calc(100vh - 15px)",
          "calc(100vh - 15px)",
          "calc(100vh - 12px)",
          "calc(100vh - 15px)",
        ]}
        left={0}
        right={0}
        zIndex={"-1"}
        h={[
          "calc(100% - 100vh - 5px)",
          "calc(100% - 100vh - 5px)",
          "calc(100% - 100vh - 5px)",
          "auto",
          "calc(100% - 100vh - 5px)",
        ]}
        w="full"
        objectFit={"cover"}
      />

      <VStack
        maxW={"1200px"}
        id={"about"}
        py={[10, 10, 16, 20, 20]}
        px={[5, 5, 5, 5, 0, 0]}
      >
        <ButtonCard />
        <Box py={[0, 10, 16, 20, 20]} />
        <ChakraBox
          whileInView={{ y: 100, scale: 1 }}
          display={["none", "block"]}
          viewport={{ once: true }}
          initial={{ y: 0, scale: 0.1 }}
          transition={{ y: bounceValue }}
        >
          <Image src="/assets/img/boyWithCoin.svg" />
        </ChakraBox>
      </VStack>
      <VStack maxW={"1200px"} py={[20, 10, 16, 20, 20]}>
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
          transform={[
            "translateY(-50%)",
            "translateY(-50%)",
            "translateY(-60%)",
            "translateY(-60%)",
            "translateY(-60%)",
          ]}
        >
          <ChakraBox
            whileInView={{ x: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            initial={{ x: -300, y: 20, scale: 0.8 }}
            transition={{ y: bounceValue }}
            display="flex"
          >
            <FlowerGirl size={["25vw", "20vw", "18vw", "15vw", "13vw"]} />
            <Box w={20} />
          </ChakraBox>
          <ChakraBox
            whileInView={{ x: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            initial={{ x: 300, y: 20, scale: 0.8 }}
            transition={{ y: bounceValue }}
          >
            <SwordBoy size={["20vw", "18vw", "15vw", "13vw", "10vw"]} />
          </ChakraBox>
        </HStack>
      </VStack>
      <VStack maxW={"1200px"} py={[10, 10, 16, 20, 20]}>
        <DefaultCard
          heading={"Backed by Official Cambridge Curricilum"}
          text={
            "All questions are Cambridge certified, so the learning is valuable in real life!"
          }
          icon={"book"}
        />
        <HStack
          w={"full"}
          justifyContent="space-between"
          px={16}
          pos="relative"
          transform={[
            "translateY(-55%)",
            "translateY(-45%)",
            "translateY(-55%)",
            "translateY(-65%)",
            "translateY(-65%)",
          ]}
        >
          <Box>
            <ChakraBox
              whileInView={{ opacity: 1, x: "10%", scale: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0.1, scale: 0.1 }}
              transition={{ delay: 0.3 }}
              display={["none", "none", "none", "block", "block"]}
            >
              <Star num="" />
            </ChakraBox>
            <Box h={10} />
            <ChakraBox
              whileInView={{ opacity: 1, x: "-60%", scale: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0.1, scale: 0.1, x: "-60%" }}
              transition={{ delay: 0.6 }}
            >
              <Star num={"2"} />
            </ChakraBox>
            <ChakraBox
              whileInView={{ opacity: 1, scale: 1, x: "50%" }}
              viewport={{ once: true }}
              initial={{ opacity: 0.1, scale: 0.1, x: "50%" }}
              transition={{ delay: 0.9 }}
            >
              <Star num={"3"} />
            </ChakraBox>
          </Box>
          <Box
            justifyContent={"center"}
            pos="relative"
            left={16}
            alignItems="end"
            display="flex"
            flexDir={"column"}
          >
            <ChakraBox
              whileInView={{ opacity: 1, scale: 1, x: "15%" }}
              viewport={{ once: true }}
              initial={{ opacity: 0.1, x: "115%", scale: 0.1 }}
              transition={{ delay: 0.3 }}
            >
              <Star num={"1"} />
            </ChakraBox>
            <Box h={16} />
            <Box w={["40vw", "30vw", "30vw", "25vw", "17vw"]}>
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
          transform={[
            "translateY(-25%)",
            "translateY(-25%)",
            "translateY(-35%)",
            "translateY(-60%)",
            "translateY(-60%)",
          ]}
        >
          <ChakraBox
            whileInView={{ opacity: 1, scale: 1, x: "-40%" }}
            initial={{ opacity: 0.1, x: "-40%", scale: 0.1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card
              size={["40vw", "30vw", "30vw", "25vw", "17vw"]}
              card={"main"}
            />
          </ChakraBox>
          <ChakraBox>
            <ChakraBox
              whileInView={{ opacity: 1, scale: 1, x: "-10%" }}
              initial={{ opacity: 0.1, x: "-20%", scale: 0.1 }}
              transition={{ delay: "0.3" }}
              viewport={{ once: true }}
            >
              <Card
                card={"fastfood"}
                size={["15vw", "12vw", "10vw", "8vw", "5vw"]}
              />
            </ChakraBox>
            <ChakraBox
              whileInView={{ opacity: 1, scale: 1, x: "55%" }}
              initial={{ opacity: 0.1, x: "55%", scale: 0.1 }}
              transition={{ delay: "0.6" }}
              viewport={{ once: true }}
            >
              <Card
                card={"cloth"}
                size={["20vw", "16vw", "13vw", "10vw", "7vw"]}
              />
            </ChakraBox>
            <ChakraBox
              whileInView={{ opacity: 1, scale: 1, x: "-40%" }}
              initial={{ opacity: 0.1, x: "-40%", scale: 0.1 }}
              transition={{ delay: "0.9" }}
              viewport={{ once: true }}
            >
              <Card
                card={"cactus"}
                size={["11vw", "9vw", "8vw", "7vw", "4vw"]}
              />
            </ChakraBox>
            <ChakraBox
              whileInView={{ opacity: 1, scale: 1, x: "-130%", y: "-100%" }}
              viewport={{ once: true }}
              initial={{ opacity: 0.1, x: "-130%", y: "-100%", scale: 0.1 }}
              transition={{ delay: "1.2" }}
            >
              <Card card={"nokia"} size={["9vw", "7vw", "6vw", "5vw", "3vw"]} />
            </ChakraBox>
          </ChakraBox>
        </HStack>
      </VStack>
      <VStack id={"gameplay"} maxW={"1000px"} pb={20} px={[5, 5, 5, 12, 12]}>
        <Title title={"Gameplay"} />
        <Box h={10} />
        <Box w={["calc(100vw - 2.5rem)", "calc(100vw - 2.5rem)", "calc(100vw - 2.5rem)", "1000px", '1000px']} borderRadius={12} overflow="hidden" pos={"relative"}>
          <AspectRatio ratio={7 / 4} w='100%'>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/KphwW6UZOSU"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </VStack>
      <VStack
        id={"token"}
        maxW={"1200px"}
        py={[10, 10, 16, 20, 20]}
        px={[5, 5, 5, 5, 0, 0]}
      >
        <BoxCard />
      </VStack>
      <VStack id={"roadmap"} maxW={"90%"} py={[10, 10, 16, 20, 20]}>
        <Title title={"Roadmap"} />
        <Box h={10} />
        <Grid
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={10}
        >
          <GridItem>
            <GridCard
              icon={"ark"}
              text1={"Q4"}
              text2={"2021"}
              list={actList}
              index={0}
            />
          </GridItem>
          <GridItem>
            <GridCard
              icon={"starCircle"}
              text1={"Q2"}
              text2={"2022"}
              list={starList}
              index={1}
            />
          </GridItem>
          <GridItem>
            <GridCard
              icon={"swordCircle"}
              text1={"Q4"}
              text2={"2022"}
              list={swordList}
              index={2}
            />
          </GridItem>
          <GridItem>
            <GridCard
              icon={"journey"}
              text1={"Q4"}
              text2={"2022"}
              list={journeyList}
              index={3}
            />
          </GridItem>
          <GridItem>
            <GridCard
              icon={"earth"}
              text1={"Q3"}
              text2={"2024"}
              list={earthList}
              index={4}
            />
          </GridItem>
        </Grid>
      </VStack>
      <VStack
        alignItems={"start"}
        maxW={"1500px"}
        px={4}
        mx="auto"
        pt={20}
        pb={40}
      >
        <Title title={"Read Our News"} />
        <Box h={10} />
        <Grid
          gap={6}
          gridTemplateColumns={[
            [
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 1fr)",
              "repeat(4, 'auto')",
            ],
          ]}
        >
          <GridItem>
            <ReadCard
              img={
                "https://media.discordapp.net/attachments/910331361179619370/993827480538460160/Screen_Shot_2022-07-05_at_18.35.22.png"
              }
              title="“Tiny” дээр тоглоомоос хичээлээ суралцаж, сайн суралцсаныхаа төлөө койноор шагнуулна"
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              }
              href={"https://ikon.mn/n/2l1i"}
            />
          </GridItem>
          <GridItem>
            <ReadCard
              img={
                "https://media.discordapp.net/attachments/910331361179619370/993827185930551326/image00001.png"
              }
              title="Meta Learning is Coming"
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              }
              href={"https://www.youtube.com/watch?v=KphwW6UZOSU"}
            />
          </GridItem>
          <GridItem>
            <ReadCard
              img={
                "https://media.discordapp.net/attachments/910331361179619370/993827120038035517/Artboard_1_copy_3.png"
              }
              title="WEB 3.0 : What&#39;s Next?"
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              }
              href={"https://www.instagram.com/p/Cfa5XGLMz8W/"}
            />
          </GridItem>
          <GridItem>
            <ReadCard
              img={
                "https://cdn.discordapp.com/attachments/910331361179619370/993827144004284486/Artboard_2.png"
              }
              title="Guess who stopped by?"
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim"
              }
              href={
                "https://www.instagram.com/p/CeAXzr7P2g-/?utm_source=ig_web_copy_link"
              }
            />
          </GridItem>
        </Grid>
      </VStack>
    </VStack>
  );
}
