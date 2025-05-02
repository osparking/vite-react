import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CondRender from './CondRender.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CondRender />
  </StrictMode>,
)
