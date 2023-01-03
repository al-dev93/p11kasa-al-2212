import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import kasaHeaderLogo from '../../assets/LOGO.svg';
import kasaFooterLogo from '../../assets/LOGO_WHITE.svg';
import colors from '../../utils/style/colors';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  padding-top: 40px;
`;

const Header = styled.header`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: ${(props) => (props.large ? 210.32 : 122)}px;
  height: 100%;
`;
const Menu = styled.ul`
  width: 309px;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 57px;
  list-style: none;
`;

const ItemMenu = styled(NavLink)`
  text-decoration: none;
  color: ${colors.primary};
  &.active {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 66px 0 29px;
  background-color: ${colors.darkBackground};
  color: ${colors.secondary};
`;

const Span = styled.span`
  margin-top: 28.56px;
`;

const Layout = () => (
  <LayoutWrapper>
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
  </LayoutWrapper>
);

export default Layout;
