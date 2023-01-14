import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './components/Router';
// import GlobalStyle from './utils/style/GlobalStyle';
import '../src/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* <GlobalStyle /> */}
    <RouterProvider router={Router} />
  </StrictMode>,
);
