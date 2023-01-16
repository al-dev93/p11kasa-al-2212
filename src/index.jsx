import { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
);
