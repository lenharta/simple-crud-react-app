import React, { useContext } from "react";
import { GlobalContainer } from "./Layout";
import styled from "styled-components";
import DataContext from "../context/DataContext";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: calc(var(--grid-gutters) / 2);
  background-color: var(--clr-blue);
  color: var(--clr-primary);

  input::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--clr-primary);
  }

  label {
    position: absolute;
    left: -9999px;
  }
  input {
    width: 100%;
    font-size: 1.5rem;
    color: var(--clr-primary);
    font-family: var(--type-font-primary);
    font-weight: var(--type-font-weight-primary);
    padding-right: calc(var(--grid-gutters) / 4);
    padding-left: calc(var(--grid-gutters) / 4);
    box-shadow: 3px 3px 1px 0px rgba(230, 230, 230, 0.25);
    border: 3px solid var(--clr-primary);
    background: transparent;
    line-height: 2.5rem;
    border-radius: 5px;
  }
`;

const SearchBar = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <>
      <section>
        <GlobalContainer>
          <StyledForm onSubmit={(e) => e.preventDefault}>
            <label htmlFor="search">Search Posts</label>
            <input
              id="search"
              type="text"
              placeholder="Search Posts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </StyledForm>
        </GlobalContainer>
      </section>
    </>
  );
};

export default SearchBar;
