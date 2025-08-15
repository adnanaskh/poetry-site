import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Amiri:wght@400;700&display=swap');

  :root {
    --cream: #fcfaf5;
    --dark-brown: #333;
    --light-gray: #f0f0f0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Amiri', serif;
    background-color: var(--cream);
    color: var(--dark-brown);
    line-height: 1.6;
  }

  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    color: var(--dark-brown);
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--dark-brown);
    transition: color 0.3s ease;
    &:hover {
      color: #777;
    }
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;