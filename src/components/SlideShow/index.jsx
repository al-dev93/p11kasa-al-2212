import Banner from '../Banner';
import Prev from '../../assets/ARROW_BACK.svg';
import Next from '../../assets/ARROW_FORWARD.svg';
import styled from 'styled-components';
import { useState } from 'react';

/************************************************/
//*  Composant SlideShow                        */
/************************************************/

//** Style du composant */

// flèches de navigation
const NavArrow = styled.img`
  position: absolute;
  top: calc(calc(100% - 120px) / 2);
  left: ${(props) => props.scroll === 'prev' && 0};
  right: ${(props) => props.scroll === 'next' && 0};
  cursor: pointer;
  z-index: 100;
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
`;

//** Composant */
// eslint-disable-next-line react/prop-types
const SlideShow = ({ images }) => {
  // eslint-disable-next-line react/prop-types
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

export default SlideShow;
