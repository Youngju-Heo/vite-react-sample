import React from 'react'
import {
  Alert, Box, Center, Flex,
  IconButton, Spacer, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import {MdHelpOutline, MdLogout, MdMenu} from 'react-icons/md';

import {Counter} from "./features/counter/counter";

import './app.css'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import MainDrawer from "./features/common/main-drawer";

const App = (): JSX.Element => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  console.log('menu status', isOpen);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  // @ts-ignore
  return (
    <React.Fragment>
      <Flex flex={1} flexDirection="row" h="100%">
        <VStack py={1} px="1px" boxShadow="md">
          <IconButton ref={btnRef} aria-label="Menus" title="Main menu" fontSize="24px" icon={<MdMenu/>}
                      onClick={onOpen}/>
          <MainDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef}/>

          <Spacer/>
          <IconButton aria-label="Logout" title="Logout" icon={<MdLogout/>}/>
          <IconButton aria-label="Help" title="Help" fontSize="24px" icon={<MdHelpOutline/>}/>
        </VStack>
        <Box flex={1} w={30}>
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
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default App;
