import { createGlobalStyle } from 'styled-components';
import colors from '../colors';

// Style global
const GlobalStyle = createGlobalStyle`
    :root {
        --LineHeight: 142.6%; 
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: ${colors.primary};
        line-height: var(--LineHeight);
    };

    h1 {
        margin: 0;
        line-height: var(--LineHeight);
    }

    h2 {
        margin: 0;
        font-weight: 500;
        line-height: var(--LineHeight);
    }

    p {
        margin: 0;
        line-height: var(--LineHeight);
    }

    button {
        font-weight: 500;
        line-height: var(--LineHeight);
        background-color: ${colors.primary};
        color: ${colors.secondary};
        border: none;
        z-index: 2;
    }
    ul {
        padding: 0;
        list-style: none;
    }
    
    a {
        color: ${colors.primary};
    }

    header,footer {
        box-sizing: border-box;
        font-weight: 500;
        font-size: 24px;
        line-height: var(--LineHeight);
    };

    footer {
        background-color: ${colors.darkBackground};
        color: ${colors.secondary};
    }
`;

export default GlobalStyle;
