import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Toaster
      position="top-center" 
      toastOptions={{
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
      }}
    />
    <App />
    </BrowserRouter>
  </StrictMode>,
)



