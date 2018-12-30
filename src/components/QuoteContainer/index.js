import React from "react";
import { Container, Text, Author, Buttons, Button, Icon } from "./elements";

const QuoteContainer = props => (
  <Container id="quote-box">
    <Text id="text">
      <Icon className="fas fa-quote-left" style={{ marginRight: "15px" }} />

      {props.isLoading ? "Loading...." : props.quote.quote}

      <Icon className="fas fa-quote-right" style={{ marginLeft: "15px" }} />
    </Text>
    <Author id="author">
      - {props.isLoading ? "Loading...." : props.quote.author}
    </Author>
    <Buttons>
      <a
        href={props.shareTweet}
        style={{ textDecoration: "none" }}
        target="_blank"
        id="tweet-quote"
      >
        <Button>
          <Icon className="fab fa-twitter" />
        </Button>
      </a>
      <Button id="new-quote" onClick={props.getQuote}>
        New quote
      </Button>
    </Buttons>
  </Container>
);

export default QuoteContainer;
