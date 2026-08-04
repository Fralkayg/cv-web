import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ColorModeProvider } from './context/ColorModeContext'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ColorModeProvider>
  </StrictMode>,
)
