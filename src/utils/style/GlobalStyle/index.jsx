import { createGlobalStyle } from 'styled-components';
import colors from '../colors';

// Style global
const GlobalStyle = createGlobalStyle`
    :root {
        --LineHeight: 142.6%; 
    }
    * {
        line-height: var(--LineHeight);
    }
    body {
        width: 100vw;
 //       min-height: 100vh;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: ${colors.primary};
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
    };

    footer {
        background-color: ${colors.darkBackground};
        color: ${colors.secondary};
    }
`;

export default GlobalStyle;
