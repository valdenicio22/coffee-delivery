import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { CheckoutPage } from './pages/CheckoutPage'
import { LandingPage } from './pages/LandingPage'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/confirmeOrder" element={<ConfirmedOrder />} />
    </Route>,
  ),
)
