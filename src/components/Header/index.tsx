import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'
import { RegularText } from '../Typography'

export const Header = () => {
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
        <div
          className={`h-10 w-10 bg-brand-yellow-light text-brand-yellow-dark p-2 rounded-md  transitionColor hover:bg-brand-yellow-dark hover:text-brand-yellow-light`}
        >
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </div>
    </header>
  )
}
