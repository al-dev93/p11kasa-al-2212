import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import ArrowUp from '../../assets/ARROW_UP.svg';
import ArrowDown from '../../assets/ARROW_DOWN.svg';
import typo from '../../utils/style/typo';

/************************************************/
//*  Composant Collapse                         */
/************************************************/

//** Style du composant */

// conteneur principal
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
// bouton du collapse pour la page About
const AboutButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1 47px;
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
// bouton du collaps pour la page Flat
const FlatButton = styled(AboutButton)`
  flex: 1 52px;
  padding-left: 3.44%;
  font-size: 18px;
  line-height: ${typo.lineHeight}%;
  border-radius: 10px;
  &::after {
    left: 98.45%;
    right: 1.55%;
  }
`;
// conteneur du collapse pour la page About
const AboutDropDown = styled.div`
  position: relative;
  top: -9px;
  padding: 36px 27px 19px 18px;
  background-color: ${colors.lightBackground};
  //  color: ${colors.primary};
  border-radius: 0 0 5px 5px;
  z-index: 1;
`;
// conteneur du collapse pour la page Flat
const FlatDropDown = styled(AboutDropDown)`
  padding: 40px 12px 27px 20px;
  border-radius: 0 0 10px 10px;
`;
// texte contenu dans le collapse de la page About
const DropDownText = styled.p`
  margin: 0;
  font-size: 24px;
`;
// liste contenue dans le collapse de la page Flat
const DropDownList = styled.ul`
  list-style: none;
  font-size: 18px;
`;

//** Composant collapse pour les pages Flat et About */

// eslint-disable-next-line react/prop-types
const Collapse = ({ onPage, title, content }) => {
  const [isOpen, setOpen] = useState(false);
  const onFlatPage = onPage === 'Flat';

  return (
    <Wrapper>
      <>
        <AboutButton as={onFlatPage && FlatButton} isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
          {title}
        </AboutButton>
        {isOpen ? (
          <AboutDropDown as={onFlatPage && FlatDropDown}>
            <DropDownText as={onFlatPage && DropDownList}>{content}</DropDownText>
          </AboutDropDown>
        ) : null}
      </>
    </Wrapper>
  );
};

export default Collapse;
