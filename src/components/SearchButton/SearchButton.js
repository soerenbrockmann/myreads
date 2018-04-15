import React from 'react'
import { Link } from 'react-router-dom'

const SearchButton = () => {
  return(
    <div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}
export default SearchButton