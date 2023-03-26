import styled from "styled-components";

export const StyledForm = styled.div`
  position: absolute;
  display: flex;
  font-size: 16px;
  width: 40vw;
  justify-content: center;
  margine: auto;
  & div {
    height: 30px;
  }
  & .form {
    display: flex;
    flex-direction: column;
  }
  & .error {
    font-size: 12px;
    color: red;
  }
`;
