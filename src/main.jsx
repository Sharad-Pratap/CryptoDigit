import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme/theme'
import App from './App.jsx'

// Remove default CSS since we're using Chakra UI
// import './index.css'

// Add Google Fonts for our theme in a safe way
if (typeof document !== 'undefined' && document.head) {
  const fontPoppins = document.createElement('link');
  fontPoppins.rel = 'stylesheet';
  fontPoppins.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
  document.head.appendChild(fontPoppins);

  const fontInter = document.createElement('link');
  fontInter.rel = 'stylesheet';
  fontInter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(fontInter);
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}
