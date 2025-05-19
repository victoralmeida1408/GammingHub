import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './login.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
    {/* <App /> 
    <CardGame /> */}
    {/* <Navbar /> */}
    <Login />
  </StrictMode>,
  
)
