import { Box, Image, keyframes, usePrefersReducedMotion, VStack } from "@chakra-ui/react"

  
  const idle = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
  `
  
  const moveHead = keyframes`
  0% { transform: translateX(10px) rotate(-5deg); }
  40% { transform: translateX(18px) rotate(5deg); }
  70% { transform: translateX(14px) rotate(0deg); }
  100% { transform: translateX(10px) rotate(-5deg); }
  `
  const rightFootMove = keyframes`
  0% { transform: translate(40px, 0px) rotate(-10deg); }
  40% { transform: translate(48px, 10px) rotate(10deg); }
  70% { transform: translate(44px, 5px) rotate(0deg); }
  100% { transform: translate(40px, 0px) rotate(-10deg); }
  `
  const leftFootMove = keyframes`
  0% { transform: translate(43px, 10px) rotate(-10deg); }
  40% { transform: translate(51px, 20px) rotate(5deg); }
  70% { transform: translate(47px, 15px) rotate(0deg); }
  100% { transform: translate(43px, 10px) rotate(-10deg); }
  `
  export const BoyArt = () => {
    const prefersReducedMotion = usePrefersReducedMotion()
  const boyIdle = prefersReducedMotion ? undefined : `${idle} infinite 4s linear`
  const boyMoveHead = prefersReducedMotion ? undefined : `${moveHead} infinite 5s linear`
  const boyRightFoot = prefersReducedMotion ? undefined : `${rightFootMove} infinite 5s linear`
  const boyLeftFoot = prefersReducedMotion ? undefined : `${leftFootMove} infinite 5s linear`
    return (
        <Box animation={boyIdle} pos={'relative'} >
        <Image src='/assets/img/boy/head.svg' animation={boyMoveHead} mx='auto' />
        <Image src='/assets/img/boy/body.svg' mx='auto' />
        <Box justifyContent={'center'} display='flex' mx='auto'>

          <Image src='/assets/img/boy/rightFoot.svg' animation={boyRightFoot}/>
          <Image src='/assets/img/boy/leftFoot.svg' animation={boyLeftFoot}/>
        </Box>
      </Box>
    )
}


const robotRightHand = keyframes`
0% { transform: translate(23px, -35px) rotate(20deg); }
40% { transform: translate(21px, -25px) rotate(5deg); }
70% { transform: translate(22px, -30px) rotate(10deg); }
100% { transform: translate(23px, -35px) rotate(20deg); }
`

const robotRightFoot = keyframes`
0% { transform: translate(23px, 0) rotate(20deg); }
40% { transform: translate(21px, 10px) rotate(5deg); }
70% { transform: translate(22px, 15px) rotate(10deg); }
100% { transform: translate(23px, 0) rotate(20deg); }
`
const robotLeftFoot = keyframes`
0% { transform: translate(10px, -40px) rotate(20deg); }
40% { transform: translate(11px, -30px) rotate(5deg); }
70% { transform: translate(12px, -35px) rotate(10deg); }
100% { transform: translate(10px, -40px) rotate(20deg); }
`
export const RobotArt = () => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const robotIdle = prefersReducedMotion ? undefined : `${idle} infinite 4s linear`
    const robotMoveHead = prefersReducedMotion ? undefined : `${moveHead} infinite 5s linear`
    const robotRightHandMove = prefersReducedMotion ? undefined : `${robotRightHand} infinite 5s linear`
    const robotRightFootMove = prefersReducedMotion ? undefined : `${robotRightFoot} infinite 5s linear`
    const robotLeftFootMove = prefersReducedMotion ? undefined : `${robotLeftFoot} infinite 5s linear`
    return (
        <Box animation={robotIdle} pos={'relative'}>
                <Image src="/assets/img/robot/head.svg" mx='auto' animation={robotMoveHead}/>
            <Box display={'flex'} justifyContent='center'
            pos={'relative'}
            transform={'translateY(-5px)'}
            >
            <Image src="/assets/img/robot/rightHand.svg" animation={robotRightHandMove} pos='relative' zIndex={3}/>
            <Image src="/assets/img/robot/body.svg" zIndex={5} pos='relative'/>
            <Image src="/assets/img/robot/leftHand.svg" pos={'relative'} transform='translate(-20px, -18px)' />
            </Box>
            <Box display={'flex'} justifyContent='center'><Image src="/assets/img/robot/rightFoot.svg" animation={robotRightFootMove}/>
            <Image src="/assets/img/robot/leftFoot.svg" animation={robotLeftFootMove}/></Box>
        </Box>
    )
}

export const BoyWithCard = () => {
    const prefersReducedMotion = usePrefersReducedMotion()
    const idleMove = prefersReducedMotion ? undefined : `${idle} infinite 4s linear`
    return (
        <Box display={'flex'} flexDir='column' alignItems={'center'} >
            <Box pos={'relative'} display='flex' flexDir={'column'} alignItems='center' animation={idleMove} >
            <Box display={'flex'} justifyContent='center' gap={'20px'}>
                <Image src="/assets/img/boyWithCard/fastfood.svg"/>
            <Image src="/assets/img/boyWithCard/nokia.svg"/></Box>
            <Box display={'flex'} justifyContent='center' gap="80px" transform={'translateY(0px)'}>
                <Image src="/assets/img/boyWithCard/cactus.svg"/>
                <Image src="/assets/img/boyWithCard/cloth.svg"  />
                
            </Box>
            </Box>
            <VStack pos={'relative'} transform='translateY(-120px)' mx='auto' >
                <Image src="/assets/img/boyWithCard/head.svg" transform={'translateX(15px)'}/>
                <Box display={'flex'} transform='translateY(-10px)'>
                <Image src="/assets/img/boyWithCard/pencil.svg" zIndex={8} pos={'relative'}
                transform={'translate(70px, 30px)'}
                />
                <Image src="/assets/img/boyWithCard/body.svg" transform={'translateX(-20px)'} zIndex={5} pos='relative'/>
                <Image src="/assets/img/boyWithCard/book.svg" transform={'translate(-42px, 20px)'}/>

                </Box>
                <Box display={'flex'} gap={'50px'} transform='translateY(-8px)'>
                <Image src="/assets/img/boyWithCard/rightFoot.svg"/>
                <Image src="/assets/img/boyWithCard/leftFoot.svg"/>


                </Box>

            </VStack>
        </Box>
    )
}