import React from "react";
import styled from "styled-components";
import UserPost from "./UserPost";

const StyledFeed = styled.div``;

const Feed = ({ posts }) => {
  return (
    <section>
      <h1>Feed</h1>
      {posts.map((post) => (
        <>
          <UserPost key={post.id} post={post} />
        </>
      ))}
    </section>
  );
};

export default Feed;
