import styled from "styled-components";

export const QuoteItem = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid lightgray;
  padding: 40px;
  flex-shrink: 0;
  position: relative;
`;

export const Title = styled.div`
  font-size: 20px;
  position: absolute;
  top: 1rem;
  left: 50%;
  font-family: Oswald, "sans-serif";
`;

export const Text = styled.div`
  font-size: 16px;
  font-family: Roboto, "sans-serif";
`;

export const Container = styled.div`
  transition: 0.5s;
  width: ${props => (props.expand ? "350px" : "80px")};
  min-height: 100vh;
  background: ${props => (props.expand ? "#fff" : "transparent")};
  position: fixed;
  z-index: 99999999;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  border-left: ${props => (props.expand ? "1px solid lightgray" : "none")};
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  ${props =>
    props.expand
      ? `
		${QuoteItem} {
			display: block;
		}
    ${Title} {
      opacity: 1;
    }
	`
      : `
		${QuoteItem} {
			display: none;
		}
    ${Title} {
      opacity: 0;
    }
	`}
`;

export const Icon = styled.i`
  font-size: 25px;
  font-weight: bold;
  color: #1b68d3;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
