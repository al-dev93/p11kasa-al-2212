import { Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

/************************************************/
//*  Page Error                                 */
/************************************************/

//** Style de la page */

// conteneur principal
const Wrapper = styled.div`
  margin: 10.563rem 0 0 1.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  // affichage smartphone
  @media screen and (max-width: 768px) {
    margin: 12.188rem auto 0;
  }
`;
// titre de la page, numéro d'erreur
const ErrorNumber = styled.h1`
  margin-bottom: 36px;
  font-size: 288px;
  font-weight: 700;
  // affichage tablette
  @media screen and (max-width: 1224px) {
    font-size: 192px;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    margin-bottom: 11px;
    font-size: 96px;
  }
`;
// message d'erreur
const ErrorMessage = styled.p`
  margin-bottom: 182px;
  font-size: 36px;
  font-weight: 500;
  // affichage tablette
  @media screen and (max-width: 1224px) {
    font-size: 24px;
  }
  // affichage smartphone
  @media screen and (max-width: 768px) {
    width: 77.61%;
    margin-bottom: 133px;
    font-size: 18px;
    text-align: center;
  }
`;
// lien vers la page Home
const BackHomeLink = styled(Link)`
  margin: 0 0 159px 0;
  font-weight: 500;
  // affichage smartphone
  @media screen and (max-width: 768px) {
    margin: 0 0 235px 0;
    font-size: 14px;
  }
`;

//** Composant page */

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Wrapper>
      <ErrorNumber>404</ErrorNumber>
      <ErrorMessage>Oups! La page que vous demandez n&apos;existe pas.</ErrorMessage>
      <BackHomeLink to={'/'}>-Retourner sur la page d&apos;accueil</BackHomeLink>
    </Wrapper>
  );
};

export default Error;
