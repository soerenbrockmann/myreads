import React from 'react'
import BookShelfItem from '../BookShelfItem'
import PropTypes from 'prop-types'
const SearchResults = props => {
  const {searchResults, onUpdateBook} = props
  if (searchResults.error) return null
  const bookShelfItems = searchResults.map((book, i) => (<BookShelfItem onUpdateBook={onUpdateBook} key={i} book={book}/>))
  return (
    <div>
      <div className="search-books-results">
        <ol className="books-grid">
          { bookShelfItems }
        </ol>
      </div>
    </div>
  )
}
BookShelfItem.PropTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  book: PropTypes.array.isRequired
}
export default SearchResults