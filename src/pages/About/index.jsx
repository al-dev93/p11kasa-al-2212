import styled from 'styled-components';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import BannerImage from '../../assets/images/IMG_ABOUT_PAGE.png';

/************************************************/
//*  Page About                                 */
/************************************************/

//** Style de la page */

// conteneur principal
const Wrapper = styled.div`
  margin-top: 44px;
  // affichage smartphone
  @media screen and (max-width: 768px) {
    margin-top: 17px;
  }
`;
// conteneur des collapses
const CollapseWrapper = styled.div`
  width: 82.5%;
  min-height: 31.188rem;
  margin: 31px auto;
  display: flex;
  flex-direction: column;
  row-gap: 31px;
  // affichage smartphone
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 19px 0;
    row-gap: 20px;
    min-height: 20.563rem;
  }
`;
// contenu texte des collapse
const reliability =
  'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
const respect =
  'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
const service =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const security =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

//** Composant page */

const About = () => (
  <Wrapper>
    <Banner image={`${BannerImage}`} />
    <CollapseWrapper>
      <Collapse size={'wide'} title={'Fiabilité'} content={reliability} />
      <Collapse size={'wide'} title={'Respect'} content={respect} />
      <Collapse size={'wide'} title={'Service'} content={service} />
      <Collapse size={'wide'} title={'Sécurité'} content={security} />
    </CollapseWrapper>
  </Wrapper>
);

export default About;
