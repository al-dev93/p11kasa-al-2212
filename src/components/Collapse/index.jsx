import { useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import ArrowUp from '../../assets/ARROW_UP.svg';
import ArrowDown from '../../assets/ARROW_DOWN.svg';
import typo from '../../utils/style/typo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1 47px;
  padding: 0 0 0 1.77%;
  font-size: 24px;
  font-weight: 500;
  line-height: ${typo.lineHeight}%;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  border: none;
  border-radius: 5px;
  z-index: 2;
  &::after {
    position: absolute;
    content: url(${({ isOpen }) => (isOpen ? ArrowDown : ArrowUp)});
    height: 61.5%;
    left: 94.23%;
    right: 2.94%;
    top: calc(calc(100% - 61.5%) / 2);
  }
`;

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

const AboutDropDown = styled.div`
  position: relative;
  top: -9px;
  padding: 36px 27px 19px 18px;
  background-color: ${colors.lightBackground};
  color: ${colors.primary};
  border-radius: 0 0 5px 5px;
  z-index: 1;
`;

const FlatDropDown = styled(AboutDropDown)`
  padding: 40px 12px 27px 20px;
  border-radius: 0 0 10px 10px;
`;

const DropDownText = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: ${typo.lineHeight}%;
  color: ${colors.primary};
`;

const DropDownList = styled.ul`
  list-style: none;
  font-size: 18px;
  font-weight: 400;
  line-height: ${typo.lineHeight}%;
  color: ${colors.primary};
`;

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
