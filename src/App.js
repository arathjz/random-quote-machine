import React, { Component } from "react";
import { Container } from "./elements";
import QuoteContainer from "./components/QuoteContainer";
import QuoteList from "./components/QuoteList";
import QuoteStatus from "./components/QuoteStatus";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "./actions";

class App extends Component {
  // Lifecycles
  async componentDidMount() {
    this.getQuote();
  }
  // Lifecycles

  // methods
  getQuote = () => this.props.fetchQuote();
  resize = () => this.props.toggleAside(!this.props.expand);
  // methods
  render() {
    const {
      isLoading,
      expand,
      quote,
      quoteList,
      removeQuoteFromList,
      isFetched
    } = this.props;

    const shareTweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${
      quote.quote
    }     ${quote.author}`;

    return (
      <Container>
        <QuoteContainer
          isLoading={isLoading}
          quote={quote}
          getQuote={this.getQuote}
          shareTweet={shareTweet}
        />
        <QuoteList
          expand={expand}
          quoteList={quoteList}
          resize={this.resize}
          removeQuoteFromList={removeQuoteFromList}
        />
        <QuoteStatus isLoading={isLoading} isFetched={isFetched} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

const mapStateToProps = ({ layoutReducer, quotesReducer }) => ({
  isLoading: layoutReducer.isLoading,
  expand: layoutReducer.expand,
  quote: quotesReducer.quote,
  quoteList: quotesReducer.quoteList,
  isFetched: quotesReducer.isFetched
});

const DefaultApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default DefaultApp;
