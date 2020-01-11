import React, {Component} from 'react';
import {graphql} from  'react-apollo';

import {getBookQuery} from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails() {
    const {book} = this.props.data;
    if (book) {
      return (
        <div id="book-details">
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <ul id="other-books">
            {
              book.author.books.map(book => {
                return (<li key={book.id}> {book.name} </li>)
              })
            }
          </ul>

        </div>
      );
    }
  }
  render() {
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);
