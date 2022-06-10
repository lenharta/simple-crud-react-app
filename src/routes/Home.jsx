import React, { useContext } from "react";
import styled from "styled-components";
import { Feed } from "../components";
import { GlobalContainer } from "../components/Layout";
import DataContext from "../context/DataContext";

const LoadMessage = styled.p``;
const StatusMessage = styled.p`
  color: red;
`;
const NoPost = styled.p``;

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <>
      <section>
        <GlobalContainer>
          {/* {posts.length ? (
            <Feed posts={posts} />
          ) : (
            <NoPost>
              No Posts Available
            </NoPost>
          )} */}

          {isLoading && <LoadMessage>Loading Posts...</LoadMessage>}
          {fetchError && <StatusMessage>{fetchError}</StatusMessage>}
          {!isLoading &&
            !fetchError &&
            (searchResults.length ? (
              <Feed posts={searchResults} />
            ) : (
              <NoPost>No Posts Available</NoPost>
            ))}
        </GlobalContainer>
      </section>
    </>
  );
};

export default Home;
