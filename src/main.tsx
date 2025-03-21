import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskyApp from './TaskyApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskyApp />
  </StrictMode>,
)
