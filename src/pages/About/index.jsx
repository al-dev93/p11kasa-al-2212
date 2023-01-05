import styled from 'styled-components';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';

const Wrapper = styled.div`
  margin-top: 44px;
`;

const CollapseWrapper = styled.div`
  width: 82.5%;
  margin: 31px auto;
  display: flex;
  flex-direction: column;
  row-gap: 31px;
`;

const reliability =
  'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';

const respect =
  'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';

const About = () => (
  <Wrapper>
    <Banner onAbout />
    <CollapseWrapper>
      <Collapse onPage={'About'} title={'Fiabilité'} content={reliability} />
      <Collapse onPage={'About'} title={'Respect'} content={respect} />
    </CollapseWrapper>
  </Wrapper>
);

export default About;
