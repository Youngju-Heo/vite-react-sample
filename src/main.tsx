import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {Provider} from "react-redux";

import '@fontsource/noto-sans-kr';

import './index.css';
import App from './app';
import {store} from "./app/store";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App/>
      </ChakraProvider>
    </Provider>
)
