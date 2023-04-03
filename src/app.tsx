import React, {useState} from 'react'
import {Center} from "@chakra-ui/react";
import {Counter} from "./features/counter/counter";
import './app.css'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function App() {

  return (
    <div className="App">
      <Center role="logo">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </Center>
      <h1>Vite + React</h1>
      <Counter/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
