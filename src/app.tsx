import React from 'react'
import {
  Alert, Button,
  Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader,
  DrawerOverlay, Flex,
  IconButton, Input, Spacer,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import {MdLogout, MdMenu} from 'react-icons/md';

import {Counter} from "./features/counter/counter";

import './app.css'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

const App = (): JSX.Element => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  console.log('menu status', isOpen);
  const btnRef = React.useRef<HTMLButtonElement>(null);

  // @ts-ignore
  return (
    <React.Fragment>
      <Flex gap={2}>
        <IconButton ref={btnRef} aria-label="Menus" fontSize="24px" icon={<MdMenu/>} onClick={onOpen}/>
        <Button>Help</Button>
        <Spacer/>
        <IconButton aria-label="logout" title="logout" icon={<MdLogout/>}/>

      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...'/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
    </React.Fragment>
  )
}

export default App;
