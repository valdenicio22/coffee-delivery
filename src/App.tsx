import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={Router} />
    </CartContextProvider>
  )
}

export default App
