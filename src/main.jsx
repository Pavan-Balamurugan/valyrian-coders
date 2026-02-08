import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import './styles/theme.css'
import './styles/cursor-light.css'

const root = document.getElementById('root')

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
