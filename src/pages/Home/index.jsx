import styled from 'styled-components';
import Banner from '../../components/Banner';
import colors from '../../utils/style/colors';

const Gallery = styled.div`
  background-color: ${colors.lightBackground};
  padding: 56px 50px 43px;
  margin: 43px 0;
  border-radius: 25px;
`;

const Slogan = styled.h1`
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 48px;
  line-height: var(--height);
`;

const Home = () => (
  <div>
    <Banner>{<Slogan>Chez vous, partout et ailleurs</Slogan>}</Banner>
    <Gallery>page accueil</Gallery>
  </div>
);

export default Home;
