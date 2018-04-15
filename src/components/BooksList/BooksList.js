import React from 'react';
import SearchButton from '../SearchButton';
import BookShelf from '../BookShelf';
import PropTypes from 'prop-types'

const BooksList = props => {

  const { onUpdateBook, books} = props
  const shelves = [
    {
      shelf: "currentlyReading",
      label: "Currently Reading"
    },
    {
      shelf: "wantToRead",
      label: "Want to Read"
    },
    {
      shelf: "read",
      label: "Read"
    },
  ];
  const bookShelves = shelves.map(item => (
    <BookShelf
      shelf={item.label}
      key={item.shelf}
      books={books.filter(b => b.shelf === item.shelf)}
      onUpdateBook={onUpdateBook}
    />
  ));
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookShelves}
        </div>
        <SearchButton />
      </div>
    </div>
  );
};

BookShelf.PropTypes = {
  shelf: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default BooksList;
