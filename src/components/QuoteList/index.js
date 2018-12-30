import React from "react";
import { Container, QuoteItem, Icon, Title, Text } from "./elements";

const QuoteList = props => {
  return (
    <Container expand={props.expand}>
      <Title>My quotes</Title>
      <Icon className="material-icons" onClick={props.resize}>
        menu
      </Icon>
      {props.quoteList.map((quote, index) => (
        <QuoteItem key={index}>
          <Icon
            className="material-icons"
            onClick={() => props.removeQuoteFromList(index)}
          >
            close
          </Icon>
          <Text>{quote.quote}</Text>
          <br />
          <br />
          <Text>- {quote.author}</Text>
        </QuoteItem>
      ))}
    </Container>
  );
};

export default QuoteList;
