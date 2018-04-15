import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './components/Search';
import BooksList from './components/BooksList';
import * as BooksAPI from './BooksAPI'
import './App.css';

class App extends React.Component {
  state = {
    books: [],
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  updateBook = (book, shelf) => {
    const { id } = book
    book.shelf = shelf
    this.setState(state => ({
      books: state.books.filter((b) => b.id !== id).concat([book]),
      searchResults: state.searchResults.map((b) => b.id === id ? {...b, ...{shelf}} : b)
    }))
    BooksAPI.update(book, shelf)
  }

  searchBooks = query => {
    query === ''
      ? this.setState({ searchResults: [] })
    : BooksAPI.search(query).then(res => {
      const items =
            !res || res.error
      ? []
      : res.map(book => {
        let item = this.state.books.find(b => b.id === book.id) || {
          shelf: 'none'
        };
        return { ...book, shelf: item.shelf };
      });
      this.setState({ searchResults: items });
    });
  };
  resetSearchResults = () => {
    this.setState({ searchResults: [] })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList
            onUpdateBook={this.updateBook}
            books={ this.state.books }/>
        )}/>
        <Route path="/search" render={() => (
          <Search
            onSearchBooks={ this.searchBooks }
            onUpdateBook={this.updateBook}
            searchResults={ this.state.searchResults }
			resetSearchResults={this.resetSearchResults}/>
        )} />
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

Search.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  onSearchBooks: PropTypes.func.isRequired,
  resetSearchResults: PropTypes.func.isRequired
}

export default App;
