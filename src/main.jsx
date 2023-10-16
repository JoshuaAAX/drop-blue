import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles = {`
       @font-face {
         font-family: 'perfect dos';
         font-style: normal;
         font-weight: 700;
         font-display: swap;
         src: url('./fonts/perfect-dos.ttf') format('ttf');
       }   
    `}
  />
)

const theme = extendTheme({
  fonts: {
    body:`'perfect dos', sans-serif`,
    heading: `'perfect dos', sans-serif`,
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)