import { VStack, Container, Heading,  Box } from '@chakra-ui/react'

import { BoyArt, BoyWithCard, RobotArt } from '../src/components/utils/arts'

export default function Home() {
  
  return (
    <VStack>
      <Container>
        <Heading color={'over.100'}>Example</Heading>
      </Container>

      <Box>
        <BoyArt/>
      </Box>
      <Box>
        <RobotArt/>
      </Box>
      <Box>
        <BoyWithCard/>
      </Box>

    </VStack>
  )
}
