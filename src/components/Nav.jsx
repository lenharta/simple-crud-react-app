import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContainer } from "./Layout";
import NavList from "./NavList";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: calc(var(--grid-gutters) / 4);
  padding-bottom: calc(var(--grid-gutters) / 4);

  ul {
    display: flex;
    margin-right: calc(var(--spacing-unit) * -1);
    li {
      margin-left: var(--spacing-unit);
      margin-right: var(--spacing-unit);
      border: 3px solid var(--clr-primary);
      box-shadow: 3px 3px 1px 0px rgba(230, 230, 230, 0.25);
      background: transparent;
      border-radius: 5px;
      a {
        color: var(--clr-primary);
        padding-top: var(--spacing-unit);
        padding-right: calc(var(--spacing-unit) * 2);
        padding-bottom: var(--spacing-unit);
        padding-left: calc(var(--spacing-unit) * 2);
      }
    }
  }
`;

const Logo = styled(Link)`
  color: var(--clr-primary);
  font-family: var(--type-font-primary);
  font-weight: var(--type-font-weight-primary);
  font-size: clamp(2rem, 6vw, 2.5rem);
  line-height: 3.5rem;
`;

const Nav = () => {
  return (
    <>
      <GlobalContainer>
        <Navigation>
          <Logo className="" to="/">
            Logo
          </Logo>
    
          <NavList />
        </Navigation>
      </GlobalContainer>
    </>
  );
};

export default Nav;