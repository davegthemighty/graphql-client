import React, {Component} from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './components/BookList';

const client = new ApolloClient({
  uri: "http://192.168.50.52:4000/graphql",
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
      <div id="main">
        <BookList/>
      </div>
      </ApolloProvider>
    );
  }  
}

export default App;
