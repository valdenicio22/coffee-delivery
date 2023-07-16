import { Link, NavLink } from 'react-router-dom'
import logoImage from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className="layoutContainer flex items-center justify-between py-8">
      <Link to="/">
        <img src={logoImage} alt="logo" />
      </Link>
      <div className="flex items-center gap-4">
        <div>Item</div>
        <NavLink to="/checkout">cart</NavLink>
      </div>
    </header>
  )
}
