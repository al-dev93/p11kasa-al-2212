import Banner from '../Banner';
import Prev from '../../assets/ARROW_BACK.svg';
import Next from '../../assets/ARROW_FORWARD.svg';
import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

/************************************************/
//*  Composant SlideShow                        */
/************************************************/

//** Style du composant */

// flèches de navigation
const NavArrow = styled.img`
  position: absolute;
  top: 37.76%;
  left: ${(props) => props.scroll === 'prev' && 23.36}px;
  right: ${(props) => props.scroll === 'next' && 23.36}px;
  cursor: pointer;
  z-index: 100;
  @media screen and (max-width: 1224px) {
    width: 36px;
    height: auto;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    top: 46.31%;
    width: 11.67px;
    height: auto;
    left: ${(props) => props.scroll === 'prev' && 5.84}px;
    right: ${(props) => props.scroll === 'next' && 5.84}px;
  }
`;
// compteur d'images
const Counter = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 5%;
  right: calc(calc(100% - 5%) / 2);
  top: 86.19%;
  bottom: 6.01%;
  border-radius: 5px;
  z-index: 10;
  // affichage smartphone
  @media screen and (max-width: 768px) {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;

//** Composant */

const SlideShow = ({ images }) => {
  const numberOfImage = images.length;
  const [image, setImage] = useState(0);
  // affichage des flèches et du compteur si plus d'une image
  const slide =
    numberOfImage > 1 ? (
      <>
        <NavArrow
          scroll={'prev'}
          src={Prev}
          alt='précédente'
          onClick={() => (image === 0 ? setImage(numberOfImage - 1) : setImage(image - 1))}
        />
        <NavArrow
          scroll={'next'}
          src={Next}
          alt='suivante'
          onClick={() => (image === numberOfImage - 1 ? setImage(0) : setImage(image + 1))}
        />
        <Counter>
          {image + 1} / {numberOfImage}
        </Counter>
      </>
    ) : null;

  return (
    <Banner image={images[image]} slideshow>
      {slide}
    </Banner>
  );
};
// déclaration de type des props
SlideShow.propTypes = {
  images: PropTypes.array,
};

export default SlideShow;
