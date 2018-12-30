import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 500px;
  height: auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.63);
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  animation: ${show} 2s ease;
  font-size: 22px;
  text-align: justify;
  margin-bottom: 30px;
`;

export const Author = styled.div`
  animation: ${show} 2s ease;
  font-size: 18px;
  font-family: Oswald, "sans-serif";
  align-self: flex-end;
  margin-bottom: 70px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  background: #1b68d3;
  height: 36px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: white;
  cursor: pointer;

  &:nth-child(2) {
    font-size: 15px;
  }
`;

export const Icon = styled.i``;
