import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Arrow from '../../assets/ARROW_UP.svg';
import PropTypes from 'prop-types';

/************************************************/
//*  Composant Collapse                         */
/************************************************/

//** Style du composant */

// conteneur principal
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
// bouton du collapse pleine largeur
const WideButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex: 0 47px;
  padding: 0 0 0 18.08px;
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  // affichage tablette
  @media screen and (max-width: 1224px) {
    flex: 0 40px;
    font-size: 18px;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    flex: 0 30px;
    padding-left: 11.51px;
    font-size: 13px;
  }
`;
const WideButtonArrow = styled.span`
  position: absolute;
  line-height: 0;
  width: 23.86px;
  height: 14.064px;
  top: 16.86px;
  right: 32.61px;
  transform: rotate(${({ isOpen }) => isOpen && '180deg'});
  @media screen and (max-width: 1224px) {
    top: 12.968px;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    width: 15.2px;
    height: 8.96px;
    top: 10.76px;
    right: 6.79px;
  }
`;
// bouton du collapse demi-largeur
const HalfButton = styled(WideButton)`
  flex: 0 52px;
  padding-left: 20px;
  font-size: 18px;
  border-radius: 10px;
  @media screen and (max-width: 1224px) {
    flex: 0 36px;
    font-size: 18px;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    flex: 0 30px;
    padding-left: 11.51px;
    font-size: 13px;
    border-radius: 5px;
  }
`;
const HalfButtonArrow = styled(WideButtonArrow)`
  width: 26.4px;
  height: 15.56px;
  top: 17.79px;
  right: 11.8px;
  @media screen and (max-width: 1224px) {
    width: 23.86px;
    height: 14.064px;
    top: 10.97px;
  }
  //affichage smartphone
  @media screen and (max-width: 768px) {
    width: 15.2px;
    height: 8.96px;
    top: 10.74px;
    right: 6.79px;
  }
`;
const ArrowElement = styled.img`
  width: 100%;
  height: 100%;
`;
// conteneur du collapse pleine largeur
const WideDropDown = styled.div`
  margin-top: -9px;
  padding: 36px 27px 19px 18px;
  flex: 1;
  font-size: 24px;
  background-color: ${colors.lightBackground};
  border-radius: 0 0 5px 5px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    margin-top: -5.8px;
    padding: 23px 6.9px 1.3px 11.5px;
    font-size: 12px;
  }
`;
// conteneur du collapse demi-largeur
const HalfDropDown = styled(WideDropDown)`
  padding: 40px 12px 27px 20px;
  font-size: 18px;
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 768px) {
    margin-top: -5.77px;
    padding: 23px 6.9px 1.3px 11.5px;
    font-size: 12px;
  }
`;

//** Composant collapse pour les pages Flat et About */

const Collapse = ({ size, title, content }) => {
  const [isOpen, setOpen] = useState(false);
  const isHalf = size === 'half';

  return (
    <Wrapper>
      <>
        <WideButton as={isHalf && HalfButton} onClick={() => setOpen(!isOpen)}>
          {title}
          <WideButtonArrow as={isHalf && HalfButtonArrow} isOpen={isOpen}>
            <ArrowElement src={Arrow} alt='' />
          </WideButtonArrow>
        </WideButton>
        {isOpen ? (
          <WideDropDown as={isHalf && HalfDropDown}>
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </WideDropDown>
        ) : null}
      </>
    </Wrapper>
  );
};
// déclaration de type des props
Collapse.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Collapse;
