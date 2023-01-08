import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/************************************************/
//*  Composant Card                             */
/************************************************/

//** Style du composant */

// conteneur principal
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 340px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)
    ${colors.primary};
  border-radius: 10px;
`;
// lien vers la page appartement
const WrapperLink = styled(Link)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
// conteneur du contenu
const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// image de la carte
const ImageWrapper = styled.div`
  width: 100%;
  height: 69.12%;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;
// titre de la carte
const CardTitle = styled.h2`
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px 20px;
  font-size: 18px;
  color: ${colors.secondary};
`;

//** Composant */

// eslint-disable-next-line react/prop-types
const Card = ({ flatId, image, title }) => (
  <Wrapper>
    <WrapperLink to={`/flat/${flatId}`}>
      <WrapperContent>
        <ImageWrapper>
          <CardImage src={image} alt='' />
        </ImageWrapper>
        <CardTitle>{title}</CardTitle>
      </WrapperContent>
    </WrapperLink>
  </Wrapper>
);

export default Card;
