import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react";
import App from './app'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./app/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
