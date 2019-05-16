import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        color: white;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    /***********************************************/
    /***********************************************/

    button {
        padding: 5px;
        font-weight: 600;
        text-align: center;
        line-height: 50px;
        color: rgb(255, 255, 255, 0.5);
        border-radius: 5px;
        background: rgb(97, 22, 22);
        font-family: 'Josefin Slab', serif;
        font-size: 20px;
        line-height: 24px;
        cursor: pointer;
        border: none;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

    button:hover {
        color: #fff;
    }

`;

export default GlobalStyle;