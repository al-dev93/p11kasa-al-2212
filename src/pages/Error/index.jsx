import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
    </div>
  );
}

export default Error;
