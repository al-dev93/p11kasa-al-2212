import { createGlobalStyle } from 'styled-components';
import colors from '../colors';

/************************************************/
//*  Déclaration de style globale               */
/************************************************/

//** Style commun aux pages */

const GlobalStyle = createGlobalStyle`
    :root {
        --LineHeight: 142.6%;
    };

    * {
        line-height: var(--LineHeight);
    };

    body {
        width: 100vw;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: ${colors.primary};
        // affichage tablette
        @media screen and (max-width: 1224px) {
            font-size: 14px;
        }
        // affichage smartphone
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    };

    h1 {
        margin: 0;
    }

    h2 {
        margin: 0;
        font-weight: 500;
    }

    p {
        margin: 0;
    }

    button {
        font-weight: 500;
        background-color: ${colors.primary};
        color: ${colors.secondary};
        border: none;
        z-index: 2;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    a {
        box-sizing: border-box;
        color: ${colors.primary};
        line-height: 0;
    }

    header,footer {
        box-sizing: border-box;
        font-weight: 500;
        font-size: 24px;
        // affichage smartphone
        @media screen and (max-width: 768px) {
            font-size: 12px;
        }
    };

    footer {
        background-color: ${colors.darkBackground};
        color: ${colors.secondary};
    }
`;

export default GlobalStyle;
