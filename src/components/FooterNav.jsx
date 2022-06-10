import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContainer } from "./Layout";
import NavList from "./NavList";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-primary);
  padding-top: var(--grid-gutters);
  padding-right: var(--grid-gutters);
  padding-bottom: var(--grid-gutters);
  padding-left: var(--grid-gutters);
`;

const Logo = styled(Link)`
  color: var(--clr-primary);
  font-family: var(--type-font-primary);
  font-weight: var(--type-font-weight-primary);
  margin-right: calc(var(--grid-gutters) / 4);
  font-size: clamp(1.25rem, 6vw, 1.75rem);
  line-height: 4rem;
`;

const FooterNav = () => {
  return (
    <>
      <GlobalContainer className="">
        <Navigation>
          <Logo className="" to="/">
            Logo
          </Logo>
          <p>@ {new Date().getFullYear()}</p>
        </Navigation>
      </GlobalContainer>
    </>
  );
};

export default FooterNav;