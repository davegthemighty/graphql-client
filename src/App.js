import React, {Component} from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import AddBook from './components/AddBook';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: "http://192.168.50.52:4000/graphql",
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <h1>Books</h1>
        <BookList/>
        <AddBook/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
