import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

export default Router;
