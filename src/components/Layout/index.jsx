import './style.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import kasaHeaderLogo from '../../assets/LOGO.svg';
import kasaFooterLogo from '../../assets/LOGO_WHITE.svg';

/************************************************/
//*  composant Layout                           */
/************************************************/

const Layout = () => (
  <div className='layoutWrapper'>
    <header>
      <Link to='/'>
        <img className='logo' src={kasaHeaderLogo} alt='logo de kasa' />
      </Link>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink className='menuItem' to='/'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className='menuItem' to='about'>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Link to='/'>
        <img className='logo' src={kasaFooterLogo} alt='logo de kasa' />
      </Link>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  </div>
);

export default Layout;
