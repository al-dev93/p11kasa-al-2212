import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --height: 142.6%; 
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: var(--height);
    };
    
    li,footer {
        box-sizing: border-box;
        font-weight: 500;
        font-size: 24px;
        line-height: var(--height);
    };
`;

export default GlobalStyle;
