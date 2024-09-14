import { useState } from 'react'
import { Button, Container, Stack, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserGrid from './components/UserGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}>
        <Text
        fontSize={{ base: "3x1", md: "50" }}
        fontWeight={"blod"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}
        >
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>My Besties</Text>
        </Text>
        <UserGrid/>
      </Container>
    </Stack>
  )
}

export default App
