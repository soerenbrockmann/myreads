import React from 'react'
import { Link } from 'react-router-dom'

const SearchBar = props => {
  const { onSearchBooks, resetSearchResults } = props
  return (
    <div>
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={resetSearchResults}>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" onChange={(event) => onSearchBooks(event.target.value)}/>
        </div>
      </div>
    </div>
  )
}
export default SearchBar

