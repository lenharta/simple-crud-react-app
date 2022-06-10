import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContainer } from "../components/Layout";
import DataContext from "../context/DataContext";

const StyledForm = styled.form`
  display: block;
  /* input[type=text] {
    
  }
  input[type=email] {
    
  } */
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

const Contact = () => {
  const { handleSubmitContact, postEmail, setPostEmail, postMessage, setPostMessage } = useContext(DataContext);
  
  return (
    <>
      <section>
        <GlobalContainer>
          <h1>Contact</h1>
          <StyledForm onSubmit={handleSubmitContact}>
            <label htmlFor="userEmail">Email:</label>
            <input 
              type="email"
              id="userEmail"
              value={postEmail}
              onChange={(e) => setPostEmail(e.target.value)}
            />
            <label htmlFor="userEmail">Message:</label>
            <textarea 
              type="text" 
              id="userMessage"
              value={postMessage}
              onChange={(e) => setPostMessage(e.target.value)}
            />
            <button type="submit">Submit Message</button>
          </StyledForm>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Contact;
