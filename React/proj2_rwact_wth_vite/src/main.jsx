import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import userCard from './component/userCard.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>

  </StrictMode>,
)
