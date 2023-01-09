import styled from 'styled-components';
import colors from '../../utils/style/colors';

/************************************************/
//*  Composant Banner                           */
/************************************************/

//** Style du composant */

const BackgroundBanner = styled.section.attrs((props) => ({
  image: props.image,
  type: props.type,
}))`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-top: ${(props) => (props.type ? 33.47 : 18)}%;
  border-radius: 25px;
  line-height: 0px;
  // luminosité de l'image de fond
  background: ${colors.lightBackground} url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-blend-mode: ${(props) => (props.type ? 'normal' : 'darken')};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background: ${colors.darkBackground};
    opacity: 0.3;
  }
`;
// pour placer le slogan de Home ou les controles du slideshow
const ContentBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
const Banner = ({ children, image, slideshow }) => (
  <BackgroundBanner image={image} type={slideshow}>
    <ContentBanner>{children}</ContentBanner>
  </BackgroundBanner>
);

export default Banner;
