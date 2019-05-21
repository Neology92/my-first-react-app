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

    button:disabled:hover{
        color: rgb(255, 255, 255, 0.5);
        cursor: default;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

    button:hover {
        color: #fff;
    }

    .dish-card {
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 2rem;
  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.2),
    0 37.5px 75px -37.5px rgba(0, 0, 0, 0.3);
}

.dish-card--withImage {
  height: 300px;
  background: linear-gradient(
      to bottom,
      rgba(42, 45, 54, 1) 5%,
      rgba(42, 45, 54, 0.3) 100%
    ),
    url('http://lorempixel.com/400/200/food') no-repeat;
  background-size: cover;
}

.dish-card h3 {
  margin: 0 0 1rem;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  border-bottom: solid 2px #fff;
  font-weight: 400;
  line-height: 2;
  display: inline-block;
}

.dish-card p {
  margin: 0 0 1rem;
}

.ingredients {
  margin-top: auto;
}

.ingredients span,
.react-tagsinput-tag {
  display: inline-block;
  text-transform: uppercase;
  background: #f8f5f1;
  color: #666;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 0.8rem;
}

.ingredients span + span,
.react-tagsinput-tag + .react-tagsinput-tag {
  margin-left: 10px;
}

.react-tagsinput-tag {
  margin-bottom: 1rem;
}

`;

export default GlobalStyle;
