import React, { useState } from "react"
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import FooterNav from "./FooterNav";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

export const GlobalContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--layout-max-width);
  padding-left: calc(var(--grid-gutters) / 2);
  padding-right: calc(var(--grid-gutters) / 2);
`;

const GlobalHeader = styled.header`
  display: block;
`;
const GlobalFooter = styled.footer`
  display: block;
`;

const Layout = ({ search, setSearch }) => {

  return (
    <>
      <GlobalHeader className="blue-bg">
        <Nav />
        <SearchBar search={search} setSearch={setSearch} />
      </GlobalHeader>
      <main>
        <Outlet />
      </main>
      <GlobalFooter className="black-bg">
        <FooterNav />
      </GlobalFooter>
    </>
  );
};

export default Layout;