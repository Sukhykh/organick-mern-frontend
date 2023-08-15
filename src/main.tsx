import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './context/CartContext.tsx'
import { App } from './pages/App.tsx'
import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
