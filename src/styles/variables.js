import { css } from "styled-components";

const variables = css`
  :root {
    @font-face {
      display: swap;
      font-family: "Roboto", sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
      font-weight: 700;
    }
    @font-face {
      display: swap;
      font-family: "Open Sans", sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
      font-weight: 400;
    }

    --grid-gutters: 3rem;
    --spacing-unit: 0.5rem;
    --layout-max-width: 60rem;

    --type-font-primary: "Roboto", sans-serif;
    --type-font-secondary: "Open Sans", sans-serif;
    --type-font-weight-primary: 700;
    --type-font-weight-secondary: 400;

    --clr-primary: #ffffff;
    --clr-secondary: #000000;

    --clr-blue: #4b6cb7;
    --clr-blue-dark: #182848;
    --clr-type-grad-blue: var(--clr-blue) 0%, var(--clr-blue-dark) 100%;
  }
`;

export default variables;