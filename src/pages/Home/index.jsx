import styled from 'styled-components';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import data from '../../data/logements.json';
import BannerImage from '../../assets/images/IMG_HOME_PAGE.png';

/************************************************/
//*  Page Home                                  */
/************************************************/

//** Style de la page */

// conteneur principal
const Wrapper = styled.div`
  margin-top: 63px;
  // affichage smartphone
  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;
// Slogan intégré dans la bannière
const Slogan = styled.h1`
  width: 79%;
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 48px;
  // affichage tablette
  @media screen and (max-width: 1224px) {
    font-size: 36px;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 100%;
    width: 217px;
  }
`;
// conteneur des cartes appartements
const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 340px;
  column-gap: 60px;
  justify-content: center;
  row-gap: 50px;
  background-color: ${colors.lightBackground};
  padding: 56px 50px;
  margin: 43px auto;
  border-radius: 25px;
  // affichage tablette
  @media screen and (max-width: 1224px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    grid-template-columns: 335px;
    grid-auto-rows: 255px;
    row-gap: 20px;
    background-color: ${colors.secondary};
    padding: 0;
    margin: 22px auto;
    border-radius: 0;
  }
`;

//** Composant page */

const Home = () => (
  <Wrapper>
    <Banner image={`${BannerImage}`}>
      <Slogan>Chez vous, partout et ailleurs</Slogan>
    </Banner>
    <Gallery>
      {data.map((flat) => (
        <Card key={flat.id} flatId={flat.id} image={flat.cover} title={flat.title} />
      ))}
    </Gallery>
  </Wrapper>
);

export default Home;
