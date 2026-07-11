import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CartProvider } from './context/CartContext'
import { LikedProductsProvider } from './context/LikedProductsContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CartProvider>
        <LikedProductsProvider>
          <App />
        </LikedProductsProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
