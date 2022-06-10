import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContainer } from "../components/Layout";

const NotFound = () => {
  return (
    <>
      <section>
        <GlobalContainer>
          <h1>Route Not Found</h1>
          <Link to="/">Go To Homgepage</Link>
        </GlobalContainer>
      </section>
    </>
  );
};

export default NotFound;
