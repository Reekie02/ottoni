import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import App from './App.jsx'
import { LangProvider } from './i18n/LangContext'

createRoot(document.getElementById('root')).render(
  <LangProvider>
    <App />
  </LangProvider>
)
