import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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

const EditPost = () => {
  const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <section>
      <GlobalContainer>
        {editTitle && (
          <>
            <h1>Edit Post</h1>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="postTitle">Title:</label>
              <input
                id="postTitle"
                type="text"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <label htmlFor="postBody">Post:</label>
              <textarea
                id="postBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              />
              <button type="submit" onClick={() => handleEdit(post.id)}>
                Submit
              </button>
            </StyledForm>
          </>
        )}
        {!editTitle && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </GlobalContainer>
    </section>
  );
};

export default EditPost;
