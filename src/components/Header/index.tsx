import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'
import { RegularText } from '../Typography'

export const Header = () => {
  const { cartItems } = useCart()
  return (
    <header className="layoutContainer flex items-center justify-between py-8">
      <Link to="/">
        <img src={logoImage} alt="logo" />
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 bg-brand-purple-light text-brand-purple p-2 rounded-md">
          <MapPin size={22} weight="fill" />
          <RegularText size="sm" color="purple-dark">
            Porto Alegre, RS
          </RegularText>
        </div>
        <NavLink to="/checkout">
          <div
            className={`h-10 w-10 bg-brand-yellow-light text-brand-yellow-dark p-2 rounded-md  transitionColor hover:bg-brand-yellow-dark hover:text-brand-yellow-light relative`}
          >
            <ShoppingCart size={22} weight="fill" />
            {cartItems.length && (
              <RegularText
                as="span"
                size="sm"
                color="white"
                weight="bold"
                className="w-5 h-5 absolute -top-2 -right-2 rounded-full bg-brand-yellow-dark  flex items-center justify-center"
              >
                {cartItems.length}
              </RegularText>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  )
}
