import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 350px;
  width: 100%;
  margin: 5rem auto;
  border: 1px solid rgb(0, 208, 255);
  border-radius: 5px;
  padding: 5rem;
  background-color: wheat;

  h2 {
    margin-bottom: 1rem;
    color: blue;
  }

  button,
  input {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(0, 208, 255);
    margin-bottom: 1rem;
    &:focus {
      border: 1px solid rgb(0, 218, 245);
    }
  }

  button {
    background-color: blue;
    color: white;
    cursor: pointer;
    &:focus {
      border: none;
    }
  }

  p {
    font-size: 14px;
    color: red;
  }
`;
