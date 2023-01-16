import styles from './style.module.css';
import PropTypes from 'prop-types';

/************************************************/
//*  Composant Banner                           */
/************************************************/

const Banner = ({ children, slideshow }) => (
  <section
    className={
      children
        ? slideshow
          ? styles.bannerWrapperSlideShow
          : styles.bannerWrapperTitle
        : styles.bannerWrapper
    }
  >
    <div className={slideshow ? null : styles.bannerContent}>{children}</div>
  </section>
);
// déclaration de type des props
Banner.propTypes = {
  slideshow: PropTypes.bool,
  children: PropTypes.any,
};
export default Banner;
