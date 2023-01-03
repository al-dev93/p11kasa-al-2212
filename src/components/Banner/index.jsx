import styled from 'styled-components';
import colors from '../../utils/style/colors';
import HomeBannerImg from '../../assets/images/IMG_HOME_PAGE.png';
import AboutBannerImg from '../../assets/images/IMG_ABOUT_PAGE.png';

const BackgroundBanner = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-top: 18%;
  border-radius: 25px;
  background-image: url(${(props) => (props.$onAbout ? AboutBannerImg : HomeBannerImg)});
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

const ContentBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 79%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 48px;
  line-height: var(--height);
`;

const Banner = (props) => (
  // eslint-disable-next-line react/prop-types
  <BackgroundBanner $onAbout={props.onAbout}>
    <ContentBanner>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </ContentBanner>
  </BackgroundBanner>
);

export default Banner;
