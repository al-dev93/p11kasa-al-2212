import Banner from '../Banner';
import Prev from '../../assets/ARROW_BACK.svg';
import Next from '../../assets/ARROW_FORWARD.svg';
import styled from 'styled-components';
import { useState } from 'react';
import data from '../../data/logements.json';
import colors from '../../utils/style/colors';

/************************************************/
//*  Composant SlideShow                        */
/************************************************/

//** Style du composant */

// flèches de navigation
const NavArrow = styled.img.attrs((props) => ({
  direction: props.direction,
}))`
  position: absolute;
  top: calc(calc(100% - 120px) / 2);
  left: ${(props) => !props.direction && 0};
  right: ${(props) => props.direction && 0};
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
  line-height: var(--LineHeight);
  width: 5%;
  right: calc(calc(100% - 5%) / 2);
  top: 86.19%;
  bottom: 6.01%;
  border-radius: 5px;
  background-color: ${colors.greyBackground};
  z-index: 100;
`;
// image dans le carrousel
const FlatImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  mix-blend-mode: normal;
`;

//** Composant */
// eslint-disable-next-line react/prop-types
const SlideShow = ({ onPage, flat = data[0].pictures }) => {
  const prev = false;
  const next = true;
  const numberOfImage = flat.length;
  const [image, setImage] = useState(0);
  // affichage des flèches et du compteur si plus d'une image
  const slide =
    numberOfImage > 1 ? (
      <>
        <NavArrow
          direction={prev}
          src={Prev}
          alt='précédente'
          onClick={() => (image === 0 ? setImage(numberOfImage - 1) : setImage(image - 1))}
        />
        <NavArrow
          direction={next}
          src={Next}
          alt='suivante'
          onClick={() => (image === numberOfImage - 1 ? setImage(0) : setImage(image + 1))}
        />
        <Counter>
          {image + 1}/{numberOfImage}
        </Counter>
      </>
    ) : null;

  return (
    <Banner onPage={onPage}>
      {slide}
      <FlatImage src={flat[image]} alt='Appartement' />
    </Banner>
  );
};

export default SlideShow;
