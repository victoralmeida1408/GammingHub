import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CardGame from './cardgame.tsx'
import Navbar from './Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> 
    <CardGame /> */}
    <Navbar />
  </StrictMode>,
)
