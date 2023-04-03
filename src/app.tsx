import React from 'react'
import {Alert, Center, HStack, Text, VStack} from "@chakra-ui/react";

import {Counter} from "./features/counter/counter";

import './app.css'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

const App = (): JSX.Element => {

  return (
    <VStack className="App">
      <Center role="logo">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </Center>
      <Text fontSize='6xl'>Vite + React</Text>
      <Counter/>
      <Alert status='info' alignItems='center'
             justifyContent='center'
             textAlign='center'>
        Click on the Vite and React logos to learn more
      </Alert>
    </VStack>
  )
}

export default App;
