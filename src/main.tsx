import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './App'
import { theme } from './styles/theme'

import { queryClient } from './services/query-client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider theme={theme}>
                    <ColorModeScript initialColorMode={'dark'} />
                    <App />
                </ChakraProvider>
            </QueryClientProvider>
        </Router>
    </React.StrictMode>
)
