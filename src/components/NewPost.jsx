import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContainer } from "../components/Layout";
import DataContext from "../context/DataContext";

const StyledForm = styled.form`
  display: block;
  label {
    display: block;
    padding-top: calc(var(--grid-gutters) / 4);
    padding-bottom: calc(var(--grid-gutters) / 4);
    font-weight: var(--type-font-weight-secondary);
    font-family: var(--type-font-secondary);
    font-size: 22px;
  }
  input {
    display: block;
    font-weight: var(--type-font-weight-secondary);
    font-family: var(--type-font-secondary);
    line-height: 30px;
    font-size: 18px;
    width: 100%;
  }
  textarea {
    display: block;
    font-weight: var(--type-font-weight-secondary);
    font-family: var(--type-font-secondary);
    height: calc(var(--grid-gutters) * 4);
    font-size: 18px;
    resize: none;
    width: 100%;
  }
  button {
    display: block;
    margin-bottom: var(--grid-gutters);
    margin-top: calc(var(--grid-gutters) / 2);
    padding-top: calc(var(--grid-gutters) / 8);
    padding-bottom: calc(var(--grid-gutters) / 8);
    padding-left: var(--grid-gutters);
    padding-right: var(--grid-gutters);
    width: 100%;
  }
`;

const NewPost = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext)
  
  return (
    <>
      <section>
        <GlobalContainer>
          <h1>New Post</h1>
          <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input 
              id="postTitle"  
              type="text"
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea 
              id="postBody"
              required
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
            />
            <button type="submit">Submit</button>
          </StyledForm>
        </GlobalContainer>
      </section>
    </>
  );
};

export default NewPost;