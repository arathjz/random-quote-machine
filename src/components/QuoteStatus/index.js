import React from "react";
import { Container, Text } from "./elements";

const QuoteStatus = props => (
  <Container fetched={props.isFetched} isLoading={props.isLoading}>
    <Text isLoading={props.isLoading}>
      {props.isLoading
        ? "Fetching...."
        : props.isFetched
        ? "Fetched Succesfully!"
        : "There is a problem :("}
    </Text>
  </Container>
);

export default QuoteStatus;
