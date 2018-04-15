import React from 'react'
import SearchBar from '../SearchBar'
import SearchResults from '../SearchResults'
import PropTypes from 'prop-types'

const Search = props => {
  const { onSearchBooks, onUpdateBook, searchResults, resetSearchResults } = props
  return(
    <div>
      <div className="search-books">
        <SearchBar onSearchBooks={onSearchBooks} resetSearchResults={resetSearchResults}/>
        <SearchResults searchResults={searchResults} onUpdateBook={onUpdateBook}/>
      </div>
    </div>
  )
}

SearchBar.PropTypes = {
  onSearchBooks: PropTypes.func.isRequired,
}

SearchResults.PropTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
}
export default Search