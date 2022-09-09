import {
  Box,
  Image,
  keyframes,
  usePrefersReducedMotion,
  VStack,
} from "@chakra-ui/react";

const idle = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
  `;

const moveHead = keyframes`
  0% { transform: translate(20%, -55%) rotate(-5deg) scale(1.5); }
  40% { transform: translate(28%, -55%) rotate(5deg) scale(1.5); }
  70% { transform: translate(24%, -55%) rotate(0deg) scale(1.5); }
  100% { transform: translate(20%, -55%) rotate(-5deg) scale(1.5); }
  `;
const rightFootMove = keyframes`
  0% { transform: translate(140%, 90%) rotate(-10deg) scale(1.5); }
  40% { transform: translate(155%, 102%) rotate(10deg) scale(1.5); }
  70% { transform: translate(148%,  96%) rotate(0deg) scale(1.5); }
  100% { transform: translate(140%, 90%) rotate(-10deg) scale(1.5); }
  `;
const leftFootMove = keyframes`
  0% { transform: translate(180%, 180%) rotate(-10deg) scale(1.5); }
  40% { transform: translate(195%, 210%) rotate(5deg) scale(1.5); }
  70% { transform: translate(187%, 195%) rotate(0deg) scale(1.5); }
  100% { transform: translate(180%, 180%) rotate(-10deg) scale(1.5); }
  `;
export const BoyArt = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const boyIdle = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  const boyMoveHead = prefersReducedMotion
    ? undefined
    : `${moveHead} infinite 5s linear`;
  const boyRightFoot = prefersReducedMotion
    ? undefined
    : `${rightFootMove} infinite 5s linear`;
  const boyLeftFoot = prefersReducedMotion
    ? undefined
    : `${leftFootMove} infinite 5s linear`;
  return (
    <Box animation={boyIdle} pos={"relative"} w={"10vw"}>
      <Image
        src="/assets/img/boy/head.svg"
        animation={boyMoveHead}
        mx="auto"
        w={"60%"}
      />
      <Image
        src="/assets/img/boy/body.svg"
        mx="auto"
        transform={"scale(1.5)"}
        w={"100%"}
      />
      <Box justifyContent={"center"} display="flex" mx="auto">
        <Image
          src="/assets/img/boy/rightFoot.svg"
          animation={boyRightFoot}
          w={"30%"}
        />
        <Image
          src="/assets/img/boy/leftFoot.svg"
          animation={boyLeftFoot}
          w={"30%"}
        />
      </Box>
    </Box>
  );
};

const robotHead = keyframes`
0% { transform: translate(-20%, -70%) rotate(5deg) scale(1.5); }
40% { transform: translate(-28%, -70%) rotate(-5deg) scale(1.5); }
70% { transform: translate(-24%, -70%) rotate(0deg) scale(1.5); }
100% { transform: translate(-20%, -70%) rotate(5deg) scale(1.5); }
`;
const robotRightHand = keyframes`
0% { transform: translate(23px, -35px) rotate(20deg) scale(2); }
40% { transform: translate(21px, -25px) rotate(5deg) scale(2); }
70% { transform: translate(22px, -30px) rotate(10deg) scale(2); }
100% { transform: translate(23px, -35px) rotate(20deg) scale(2); }
`;

const robotRightFoot = keyframes`
0% { transform: translate(10%, 200%) rotate(20deg) scale(2); }
40% { transform: translate(12%, 210%) rotate(5deg) scale(2);  }
70% { transform: translate(11%, 215%) rotate(10deg) scale(2); }
100% { transform: translate(10%, 200%) rotate(20deg) scale(2); }
`;
const robotLeftFoot = keyframes`
0% { transform: translate(0, -20%) rotate(20deg) scale(2); }
40% { transform: translate(10%, -30%) rotate(5deg) scale(2); }
70% { transform: translate(8%, -25%) rotate(10deg) scale(2); }
100% { transform: translate(0, -20%) rotate(20deg) scale(2); }
`;
export const RobotArt = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const robotIdle = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  const robotMoveHead = prefersReducedMotion
    ? undefined
    : `${robotHead} infinite 5s linear`;
  const robotRightHandMove = prefersReducedMotion
    ? undefined
    : `${robotRightHand} infinite 5s linear`;
  const robotRightFootMove = prefersReducedMotion
    ? undefined
    : `${robotRightFoot} infinite 5s linear`;
  const robotLeftFootMove = prefersReducedMotion
    ? undefined
    : `${robotLeftFoot} infinite 5s linear`;
  return (
    <Box animation={robotIdle} pos={"relative"} w={"10vw"}>
      <Image
        src="/assets/img/robot/head.svg"
        mx="auto"
        animation={robotMoveHead}
        w={"60%"}
      />
      <Box
        display={"flex"}
        justifyContent="center"
        pos={"relative"}
        transform={"translateY(-5px) scale(2)"}
        w={"100%"}
      >
        <Image
          src="/assets/img/robot/rightHand.svg"
          animation={robotRightHandMove}
          pos="relative"
          zIndex={3}
          w={"30%"}
        />
        <Image
          src="/assets/img/robot/body.svg"
          zIndex={5}
          pos="relative"
          w={"40%"}
        />
        <Image
          src="/assets/img/robot/leftHand.svg"
          pos={"relative"}
          transform="translate(-20px, -18px)"
          w={"30%"}
        />
      </Box>
      <Box display={"flex"} justifyContent="center" w={"100%"}>
        <Image
          src="/assets/img/robot/rightFoot.svg"
          animation={robotRightFootMove}
          w={"28%"}
        />
        <Image
          src="/assets/img/robot/leftFoot.svg"
          animation={robotLeftFootMove}
          w={"28%"}
        />
      </Box>
    </Box>
  );
};

const nokiaHead = keyframes`
0% { transform: translate(60%, 30%) rotate(-5deg) scale(1.5); }
40% { transform: translate(68%, 30%) rotate(5deg) scale(1.5); }
70% { transform: translate(64%, 30%) rotate(0deg) scale(1.5); }
100% { transform: translate(60%, 30%) rotate(-5deg) scale(1.5); }
`;


const nokiaRightFoot = keyframes`
0% { transform: translate(150%, 250%) rotate(20deg) scale(2); }
40% { transform: translate(160%, 260%) rotate(5deg) scale(2);  }
70% { transform: translate(155%, 265%) rotate(10deg) scale(2); }
100% { transform: translate(150%, 250%) rotate(20deg) scale(2); }
`;


export const NokiaBoy = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const nokiaIdle = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  const nokiaMoveHead = prefersReducedMotion
    ? undefined
    : `${nokiaHead} infinite 5s linear`;

  const nokiaRightFootMove = prefersReducedMotion
    ? undefined
    : `${nokiaRightFoot} infinite 5s linear`;
  return (
    <Box animation={nokiaIdle} pos={"relative"} w={"5vw"} >
      <Image
        src="/assets/img/nokiaBoy/head.svg"
        mx="auto"
        animation={nokiaMoveHead}
        w={"60%"}
      />
      <Box
        display={"flex"}
        justifyContent="center"
        pos={"relative"}
        transform={"translateY(-5px) scale(2)"}
        w={"100%"}
      >

        <Image
          src="/assets/img/nokiaBoy/body.svg"
          zIndex={5}
          pos="relative"
          w={"100%"}
        />

      </Box>

    <Image
    src="/assets/img/nokiaBoy/rightFoot.svg"
    animation={nokiaRightFootMove}
    w={"20%"}
    />

    </Box>
  );
};

const girlHead = keyframes`
0% { transform: translate(-30%, -60%) rotate(5deg) scale(1.5); }
40% { transform: translate(-38%, -60%) rotate(-5deg) scale(1.5); }
70% { transform: translate(-34%, -60%) rotate(0deg) scale(1.5); }
100% { transform: translate(-30%, -60%) rotate(5deg) scale(1.5); }
`;


const girlRightFoot = keyframes`
0% { transform: translate(150%, 250%) rotate(20deg) scale(2); }
40% { transform: translate(160%, 260%) rotate(5deg) scale(2);  }
70% { transform: translate(155%, 265%) rotate(10deg) scale(2); }
100% { transform: translate(150%, 250%) rotate(20deg) scale(2); }
`;
const girlLeftFoot = keyframes`
0% { transform: translate(350%, 200%) rotate(20deg) scale(2); }
40% { transform: translate(400%, 210%) rotate(5deg) scale(2);  }
70% { transform: translate(375%, 215%) rotate(10deg) scale(2); }
100% { transform: translate(350%, 200%) rotate(20deg) scale(2); }
`;

export const Girl = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const girlIdle = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  const girlMoveHead = prefersReducedMotion
    ? undefined
    : `${girlHead} infinite 5s linear`;

  const girlRightFootMove = prefersReducedMotion
    ? undefined
    : `${girlRightFoot} infinite 5s linear`;
  const girlLeftFootMove = prefersReducedMotion
    ? undefined
    : `${girlLeftFoot} infinite 5s linear`;
  return (
    <Box animation={girlIdle} pos={"relative"} w={"3vw"} >
      <Image
        src="/assets/img/girl/head.svg"
        mx="auto"
        animation={girlMoveHead}
        w={"60%"}
      />
      <Box
        display={"flex"}
        justifyContent="center"
        pos={"relative"}
        transform={"scale(2)"}
        w={"100%"}
      >

        <Image
          src="/assets/img/girl/body.svg"
          zIndex={5}
          pos="relative"
          w={"100%"}
        />

      </Box>

    <Box >
    <Image
    src="/assets/img/girl/rightFoot.svg"
    animation={girlRightFootMove}
    w={"20%"}
    />
    <Image
    src="/assets/img/girl/leftFoot.svg"
    animation={girlLeftFootMove}
    w={"20%"}
    />
    </Box>

    </Box>
  );
};
const swordBoyHead = keyframes`
0% { transform: translate(-30%, 50%) rotate(5deg) scale(1.5); }
40% { transform: translate(-38%, 50%) rotate(-5deg) scale(1.5); }
70% { transform: translate(-34%, 50%) rotate(0deg) scale(1.5); }
100% { transform: translate(-30%, 50%) rotate(5deg) scale(1.5); }
`;


const swordBoyRightFoot = keyframes`
0% { transform: translate(200%, 250%) rotate(20deg) scale(2); }
40% { transform: translate(260%, 260%) rotate(5deg) scale(2);  }
70% { transform: translate(255%, 265%) rotate(10deg) scale(2); }
100% { transform: translate(200%, 250%) rotate(20deg) scale(2); }
`;
const swordBoyLeftFoot = keyframes`
0% { transform: translate(350%, -150%) rotate(20deg) scale(2); }
40% { transform: translate(400%, -140%) rotate(5deg) scale(2);  }
70% { transform: translate(375%, -145%) rotate(10deg) scale(2); }
100% { transform: translate(350%, -150%) rotate(20deg) scale(2); }
`;
export const SwordBoy = ({size}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const swordBoyIdle = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  const swordBoyMoveHead = prefersReducedMotion
    ? undefined
    : `${swordBoyHead} infinite 5s linear`;

  const swordBoyRightFootMove = prefersReducedMotion
    ? undefined
    : `${swordBoyRightFoot} infinite 5s linear`;
  const swordBoyLeftFootMove = prefersReducedMotion
    ? undefined
    : `${swordBoyLeftFoot} infinite 5s linear`;
  return (
    <Box animation={swordBoyIdle} pos={"relative"} w={size} >
      <Image
        src="/assets/img/swordBoy/head.svg"
        mx="auto"
        animation={swordBoyMoveHead}
        w={"60%"}
      />
      <Box
        display={"flex"}
        justifyContent="center"
        pos={"relative"}
        transform={"scale(2)"}
        w={"100%"}
      >

        <Image
          src="/assets/img/swordBoy/body.svg"
          zIndex={5}
          pos="relative"
          w={"100%"}
        />

      </Box>

    <Box >
    <Image
    src="/assets/img/swordBoy/rightFoot.svg"
    animation={swordBoyRightFootMove}
    w={"20%"}
    />
    <Image
    src="/assets/img/swordBoy/leftFoot.svg"
    animation={swordBoyLeftFootMove}
    w={"20%"}
    />
    </Box>

    </Box>
  );
};


const flowerHead = keyframes`
0% { transform: translate(-40%,10%) rotate(-5deg) scale(1.5); }
40% { transform: translate(-48%,10%) rotate(5deg) scale(1.5); }
70% { transform: translate(-44%,10%) rotate(0deg) scale(1.5); }
100% { transform: translate(-40%,10%) rotate(-5deg) scale(1.5); }
`;


const flowerRightFoot = keyframes`
0% { transform: translate(150%, 130%) rotate(20deg) scale(2); }
40% { transform: translate(160%, 140%) rotate(5deg) scale(2);  }
70% { transform: translate(155%, 145%) rotate(10deg) scale(2); }
100% { transform: translate(150%, 130%) rotate(20deg) scale(2); }
`;
const flowerLeftFoot = keyframes`
0% { transform: translate(300%, 250%) rotate(20deg) scale(2); }
40% { transform: translate(310%, 260%) rotate(5deg) scale(2);  }
70% { transform: translate(315%, 265%) rotate(10deg) scale(2); }
100% { transform: translate(300%, 250%) rotate(20deg) scale(2); }
`;


export const FlowerGirl = ({size}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const flowerIdle = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  const flowerMoveHead = prefersReducedMotion
    ? undefined
    : `${flowerHead} infinite 5s linear`;

  const flowerRightFootMove = prefersReducedMotion
    ? undefined
    : `${flowerRightFoot} infinite 5s linear`;
  const flowerLeftFootMove = prefersReducedMotion
    ? undefined
    : `${flowerLeftFoot} infinite 5s linear`;
  return (
    <Box animation={flowerIdle} pos={"relative"} w={size} >
      <Image
        src="/assets/img/girlFlower/head.svg"
        mx="auto"
        animation={flowerMoveHead}
        w={"60%"}
      />
      <Box
        display={"flex"}
        justifyContent="center"
        pos={"relative"}
        transform={"translateY(-5px) scale(2)"}
        w={"100%"}
      >

        <Image
          src="/assets/img/girlFlower/body.svg"
          zIndex={5}
          pos="relative"
          w={"60%"}
        />

      </Box>

      <Box >
    <Image
    src="/assets/img/girlFlower/rightFoot.svg"
    animation={flowerRightFootMove}
    w={"15%"}
    />
    <Image
    src="/assets/img/girlFlower/leftFoot.svg"
    animation={flowerLeftFootMove}
    w={"15%"}
    />
    </Box>



    </Box>
  );
};

export const Star = ({num}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const idleMove = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  return (
    <Box animation={idleMove} >
      <Image src={`/assets/img/star${num}.svg`} />
    </Box>
  )
}

export const Card = ({card, size}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const idleMove = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  return (
    <Box animation={idleMove} w={size}>
      <Image src={`/assets/img/boyWithCard/${card}.svg`} w={'100%'}/>
    </Box>
  )
}

export const BoyWithCard = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const idleMove = prefersReducedMotion
    ? undefined
    : `${idle} infinite 4s linear`;
  return (
    <Box display={"flex"} flexDir="column" alignItems={"center"}>
      <Box
        pos={"relative"}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        animation={idleMove}
      >
        <Box display={"flex"} justifyContent="center" gap={"20px"}>
          <Image src="/assets/img/boyWithCard/fastfood.svg" />
          <Image src="/assets/img/boyWithCard/nokia.svg" />
        </Box>
        <Box
          display={"flex"}
          justifyContent="center"
          gap="80px"
          transform={"translateY(0px)"}
        >
          <Image src="/assets/img/boyWithCard/cactus.svg" />
          <Image src="/assets/img/boyWithCard/cloth.svg" />
        </Box>
      </Box>
      <VStack pos={"relative"} transform="translateY(-120px)" mx="auto">
        <Image
          src="/assets/img/boyWithCard/head.svg"
          transform={"translateX(15px)"}
        />
        <Box display={"flex"} transform="translateY(-10px)">
          <Image
            src="/assets/img/boyWithCard/pencil.svg"
            zIndex={8}
            pos={"relative"}
            transform={"translate(70px, 30px)"}
          />
          <Image
            src="/assets/img/boyWithCard/body.svg"
            transform={"translateX(-20px)"}
            zIndex={5}
            pos="relative"
          />
          <Image
            src="/assets/img/boyWithCard/book.svg"
            transform={"translate(-42px, 20px)"}
          />
        </Box>
        <Box display={"flex"} gap={"50px"} transform="translateY(-8px)">
          <Image src="/assets/img/boyWithCard/rightFoot.svg" />
          <Image src="/assets/img/boyWithCard/leftFoot.svg" />
        </Box>
      </VStack>
    </Box>
  );
};


