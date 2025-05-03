import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CondRender from './CondRender.jsx'
import './index.css'
import UsingFunc from './UsingFunc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsingFunc />
  </StrictMode>,
)
