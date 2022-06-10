import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`
  ${variables}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    display: block;
  }
  main {
    display: block;
    /* TEMPORARY STYLE */
    min-height: 68vh;
  }
  section {
    display: block;
  }
  article {
    display: block;
  }
  header {
    display: block;
  }

  li {
    display: block;
    text-decoration: none;
    list-style-type: none;
  }

  a {
    display: block;
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    text-decoration-color: none;
    color: var(--clr-secondary);
    text-decoration: none;
    font-size: 0.9rem;
  }

  h1 {
    display: block;
    color: var(--clr-secondary);
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    font-size: clamp(2rem, 6vw, 2.5rem);
    line-height: 4rem;
  }
  h2 {
    display: block;
    color: var(--clr-secondary);
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    font-size: clamp(1rem, 4vw, 2rem);
    line-height: 3.5rem;
  }
  h3 {
    display: block;
    color: var(--clr-secondary);
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    font-size: clamp(1rem, 4vw, 2rem);
    line-height: 3.5rem;
  }

  [class~=blue-bg] {
    background-color: var(--clr-blue); 
  }
  [class~=black-bg] {
    background-color: var(--clr-secondary); 
  }

  .instructions {
      border-radius: 0.5rem;
      color: var(--clr-primary);
      background: var(--clr-secondary);
      font-family: var(--type-font-primary);
      font-weight: var(--type-font-weight-primary);
      padding: calc(var(--grid-gutters) / 4);
      font-size: 0.75rem;
      position: relative;
      bottom: -10px;
    }

    .instructions svg {
      margin-right: 0.5rem;
    }

    .offscreen {
      position: absolute;
      left: -9999px;
    }

    .hide {
      display: none;
    }

    .valid {
      color: green;
    }

    .invalid {
      color: red;
    }

    .errmsg {
      background-color: lightpink;
      color: firebrick;
      font-weight: bold;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .line { 
      display: inline-block;
      color: yellow;
      width: 100%;
    }
`;
