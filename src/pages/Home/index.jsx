import styled from 'styled-components';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import colors from '../../utils/style/colors';
import data from '../../data/logements.json';

/************************************************/
//*  Page Home                                  */
/************************************************/

//** Style de la page */

// conteneur principal
const Wrapper = styled.div`
  margin-top: 63px;
`;
// conteneur des cartes appartements
const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 340px;
  column-gap: 60px;
  row-gap: 50px;
  background-color: ${colors.lightBackground};
  padding: 56px 50px 43px;
  margin: 43px 0;
  border-radius: 25px;
`;
// Slogan dans la bannière
const Slogan = styled.h1`
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 48px;
`;

//** Composant page */

const Home = () => (
  <Wrapper>
    <Banner onPage={'Home'}>{<Slogan>Chez vous, partout et ailleurs</Slogan>}</Banner>
    <Gallery>
      {data.map((flat) => (
        <Card key={flat.id} flatId={flat.id} image={flat.cover} title={flat.title} />
      ))}
    </Gallery>
  </Wrapper>
);

export default Home;
