import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { CheckoutPage } from './pages/CheckoutPage'
import { ConfirmedOrder } from './pages/ConfirmedOrder'
import { LandingPage } from './pages/LandingPage'

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/confirmedOrder" element={<ConfirmedOrder />} />
    </Route>,
  ),
)
