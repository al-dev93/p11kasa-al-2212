import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import kasaHeaderLogo from '../../assets/LOGO.svg';
import kasaFooterLogo from '../../assets/LOGO_WHITE.svg';

/************************************************/
//*  Composant Layout                           */
/************************************************/

//** Style du composant */

// Conteneur principal
const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
`;
// Style du header
const Header = styled.header`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: ${(props) => (props.large ? 210.32 : 122)}px;
  height: 100%;
`;
// Style du menu
const Menu = styled.ul`
  width: 309px;
  display: flex;
  justify-content: flex-end;
  gap: 57px;
`;
const ItemMenu = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;
// Style du corps principal
const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
`;
// Style du footer
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 66px 0 29px;
`;
const Span = styled.span`
  margin-top: 28.56px;
  height: 46px;
`;

//** Composant Layout, commun à toutes les pages */

const Layout = () => (
  <Wrapper>
    <Header>
      <Link to='/'>
        <Logo large src={kasaHeaderLogo} alt='logo de kasa' />
      </Link>
      <nav>
        <Menu>
          <li>
            <ItemMenu to='/'>Accueil</ItemMenu>
          </li>
          <li>
            <ItemMenu to='about'>A Propos</ItemMenu>
          </li>
        </Menu>
      </nav>
    </Header>
    <Main>
      <Outlet />
    </Main>
    <Footer>
      <Link to='/'>
        <Logo src={kasaFooterLogo} alt='logo de kasa' />
      </Link>
      <Span>© 2020 Kasa. All rights reserved</Span>
    </Footer>
  </Wrapper>
);

export default Layout;
