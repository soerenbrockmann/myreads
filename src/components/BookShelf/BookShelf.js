import React from 'react'
import BookShelfItem from '../BookShelfItem'
import PropTypes from 'prop-types'

const BookShelf = props => {
  const { onUpdateBook, shelf, books } = props

  const bookShelfItems = books.map((book, i) => (<BookShelfItem onUpdateBook={onUpdateBook} key={i} book={book}/>))
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookShelfItems}
          </ol>
        </div>
      </div>
    </div>
  )
}
BookShelfItem.PropTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  book: PropTypes.array.isRequired
}
export default BookShelf