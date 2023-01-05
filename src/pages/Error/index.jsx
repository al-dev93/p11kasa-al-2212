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
`;
// titre de la page, numéro d'erreur
const ErrorNumber = styled.h1`
  margin: 0 0 36px 0;
  font-size: 288px;
  font-weight: 700;
`;
// message d'erreur
const ErrorMessage = styled.p`
  margin: 0 0 182px 0;
  font-size: 36px;
  font-weight: 500;
`;
// lien vers la page Home
const BackHomeLink = styled(Link)`
  margin: 0 0 159px 0;
  font-weight: 500;
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
