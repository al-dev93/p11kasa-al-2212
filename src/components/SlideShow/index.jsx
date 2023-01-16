import styles from './style.module.css';
import { useState } from 'react';
import Banner from '../Banner';
import Prev from '../../assets/ARROW_BACK.svg';
import Next from '../../assets/ARROW_FORWARD.svg';
import PropTypes from 'prop-types';

/************************************************/
//*  Composant SlideShow                        */
/************************************************/

const SlideShow = ({ images }) => {
  const numberOfImage = images.length;
  const [image, setImage] = useState(0);
  // affichage des flèches et du compteur si plus d'une image
  const slide =
    numberOfImage > 1 ? (
      <>
        <img
          className={styles.navArrowLeft}
          src={Prev}
          alt='précédente'
          onClick={() => (image === 0 ? setImage(numberOfImage - 1) : setImage(image - 1))}
        />
        <img
          className={styles.navArrowRight}
          src={Next}
          alt='suivante'
          onClick={() => (image === numberOfImage - 1 ? setImage(0) : setImage(image + 1))}
        />
        <span className={styles.imageCounter}>
          {image + 1} / {numberOfImage}
        </span>
      </>
    ) : null;

  return (
    <Banner slideshow>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={images[image]} alt='' />
      </div>
      {slide}
    </Banner>
  );
};
// déclaration de type des props
SlideShow.propTypes = {
  images: PropTypes.array,
};

export default SlideShow;
