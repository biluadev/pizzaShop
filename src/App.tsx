import { Helmet, HelmetProvider } from 'react-helmet-async'
import './global.css'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
