import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostArticle = styled.article``;
const Date = styled.p``;
const Body = styled.p``;

const UserPost = ({ post }) => {
  return (
    <>
      <PostArticle>
        <Link to={`post/${post.id}`}>
          <h2>{post.title}</h2>
          <Date>{post.datetime}</Date>
          <Body>
            {(post.body).length <= 25
              ? post.body
              : `${(post.body).slice(0, 25)}...`}
          </Body>
        </Link>
      </PostArticle>
    </>
  );
};

export default UserPost;
