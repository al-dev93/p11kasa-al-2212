import { Link, Outlet } from 'react-router-dom';
import kasaLogo from '../../assets/LOGO.svg';

const Layout = () => (
  <div>
    <header>
      <img src={kasaLogo} alt='logo de kasa' />
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Accueil</Link>
          </li>
          <li>
            <Link to={'about'}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer></footer>
  </div>
);

export default Layout;
