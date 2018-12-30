import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 250px;
  height: 100px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isLoading
      ? `
    background: #fff;
  `
      : props.fetched
      ? `background: green;`
      : `background: red;`}
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isLoading ? "black" : "white")};
`;
