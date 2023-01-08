import styled from 'styled-components';
import colors from '../../utils/style/colors';
import HomeBannerImg from '../../assets/images/IMG_HOME_PAGE.png';
import AboutBannerImg from '../../assets/images/IMG_ABOUT_PAGE.png';

/************************************************/
//*  Composant Banner                           */
/************************************************/

//** Style du composant */

const BackgroundBanner = styled.section.attrs((props) => ({
  onPage: props.onPage,
}))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-top: ${(props) => (!props.onPage ? 33.47 : 18)}%;
  border-radius: 25px;
  background-color: ${colors.lightBackground};
  // Image de fond différente sur Home, About et SlideShow
  background: url(${(props) => getImageBanner(props.onPage)});
  background-size: cover;
  line-height: 0px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: ${colors.darkBackground};
    mix-blend-mode: darken;
    opacity: 0.3;
  }
`;
// Conteneur pour le slogan de la page Home
const ContentBanner = styled.div.attrs((props) => ({
  onPage: props.onPage,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.onPage === 'Home' ? 79 : 100)}%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 48px;
`;

function getImageBanner(page) {
  switch (page) {
    case 'Home':
      return HomeBannerImg;
    case 'About':
      return AboutBannerImg;
    default:
      return '';
  }
}

//** Composant */

// eslint-disable-next-line react/prop-types
const Banner = ({ children, onPage }) => (
  // eslint-disable-next-line react/prop-types
  <BackgroundBanner onPage={onPage}>
    <ContentBanner onPage={onPage}>
      {/* eslint-disable-next-line react/prop-types */}
      {children}
    </ContentBanner>
  </BackgroundBanner>
);

export default Banner;
