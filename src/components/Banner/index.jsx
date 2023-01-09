import styled, { css } from 'styled-components';
import colors from '../../utils/style/colors';
import HomeBannerImg from '../../assets/images/IMG_HOME_PAGE.png';
import AboutBannerImg from '../../assets/images/IMG_ABOUT_PAGE.png';

/************************************************/
//*  Composant Banner                           */
/************************************************/

//** Style du composant */

const BackgroundBanner = styled.section.attrs((props) => ({
  image: props.image,
}))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-top: ${(props) => (props.image != '/' && props.image != '/about' ? 33.47 : 18)}%;
  border-radius: 25px;
  line-height: 0px;
  background: ${colors.lightBackground};
  // Image de fond différente sur Home, About et SlideShow
  ${(props) => {
    switch (true) {
      case props.image === '/':
        return css`
          background: url(${HomeBannerImg});
          background-size: cover;
        `;
      case props.image === '/about':
        return css`
          background: url(${AboutBannerImg});
          background-size: cover;
        `;
    }
  }}
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
  image: props.image,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.image === '/' ? 79 : 100)}%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 48px;
`;

//** Composant */

// eslint-disable-next-line react/prop-types
const Banner = ({ children }) => {
  //récupère l'URL de la page en cours
  const url = new URL(document.location);

  return (
    <BackgroundBanner image={url.pathname}>
      <ContentBanner image={url.pathname}>{children}</ContentBanner>
    </BackgroundBanner>
  );
};

export default Banner;
