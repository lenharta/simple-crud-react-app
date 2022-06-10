import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContainer } from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const PostArticle = styled.article`
  display: block;
`;

const EditButton = styled.button``;

const DeleteButton = styled.button``;

const Post = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <>
      <section>
        <GlobalContainer>
          <PostArticle>
            {post && (
              <>
                <h2>{post.title}</h2>
                <p>{post.datetime}</p>
                <p>{post.body}</p>
                <Link to={`/edit/${post.id}`}>
                  <EditButton>Edit Post</EditButton>
                </Link>
                <DeleteButton onClick={() => handleDelete(post.id)}>
                  Delete Post
                </DeleteButton>
              </>
            )}
            {!post && (
              <>
                <h2>Post Not Found</h2>
                <p>Well, that's disappointing</p>
                <p>
                  <Link to="/">Visit Our Homepage</Link>
                </p>
              </>
            )}
          </PostArticle>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Post;
