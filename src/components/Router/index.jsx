import { createBrowserRouter } from 'react-router-dom';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Flat from '../../pages/Flat';
import Home from '../../pages/Home';
import Layout from '../Layout';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [
          { index: true, element: <Home /> },
          { path: '/about', element: <About /> },
          { path: '/flat', element: <Flat /> },
        ],
      },
    ],
  },
]);

export default Router;
