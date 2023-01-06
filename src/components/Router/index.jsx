import { createBrowserRouter } from 'react-router-dom';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Flat from '../../pages/Flat';
import Home from '../../pages/Home';
//todo retirer après test du slideshow
import Test from '../../pages/Test';
//todo
import Layout from '../Layout';

/************************************************/
//*  Composant Router                           */
/************************************************/

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'flat/:flatId', element: <Flat /> },
      //todo retirer après test du slideshow
      { path: 'test', element: <Test /> },
      //todo
      { path: '*', element: <Error /> },
    ],
  },
]);

export default Router;
