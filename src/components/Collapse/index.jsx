import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import ArrowUp from '../../assets/ARROW_UP.svg';
import ArrowDown from '../../assets/ARROW_DOWN.svg';

/************************************************/
//*  Composant Collapse                         */
/************************************************/

//** Style du composant */

// conteneur principal
const Wrapper = styled.div`
  /* position: relative; */
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
  padding: 0 0 0 1.77%;
  font-size: 24px;
  border-radius: 5px;
  &::after {
    position: absolute;
    content: url(${({ isOpen }) => (isOpen ? ArrowDown : ArrowUp)});
    height: 61.5%;
    left: 94.23%;
    right: 2.94%;
    top: calc(calc(100% - 61.5%) / 2);
  }
`;
// bouton du collapse demi-largeur
const HalfButton = styled(WideButton)`
  flex: 0 52px;
  padding-left: 3.44%;
  font-size: 18px;
  border-radius: 10px;
  &::after {
    left: 92.96%;
    right: 1.55%;
  }
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
`;
// conteneur du collapse demi-largeur
const HalfDropDown = styled(WideDropDown)`
  padding: 40px 12px 27px 20px;
  font-size: 18px;
  border-radius: 0 0 10px 10px;
`;

//** Composant collapse pour les pages Flat et About */

// eslint-disable-next-line react/prop-types
const Collapse = ({ size, title, content }) => {
  const [isOpen, setOpen] = useState(false);
  const isHalf = size === 'half';

  return (
    <Wrapper>
      <>
        <WideButton as={isHalf && HalfButton} isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          {title}
        </WideButton>
        {isOpen ? (
          <WideDropDown as={isHalf && HalfDropDown}>
            {Array.isArray(content) ? (
              <ul>
                {/* eslint-disable-next-line react/prop-types */}
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

export default Collapse;
