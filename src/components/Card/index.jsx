import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 340px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)
    ${colors.primary};
  border-radius: 10px;
`;
const WrapperLink = styled(Link)`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  padding: 0 20px 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: var(--height);
  color: ${colors.secondary};
`;

const Card = () => (
  <Wrapper>
    <WrapperLink>
      <WrapperContent>
        <div>
          <CardImage
            src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'
            alt=''
          />
        </div>
        <CardTitle>Appartement cosy</CardTitle>
      </WrapperContent>
    </WrapperLink>
  </Wrapper>
);

export default Card;
