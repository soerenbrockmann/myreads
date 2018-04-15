import React from 'react'

const BookShelfItem = props => {
  const { book } = props
  const { onUpdateBook } = props
  const { title, shelf } = book
  const { authors = [] } = book || []
  const authorList = authors.join(', ')
  const { imageLinks } = book || {}
  const { thumbnail } = imageLinks || {}
  const style = { width: 128, height: 193, backgroundImage: `url(${thumbnail})` }

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => onUpdateBook(book, event.target.value)} value={shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authorList}</div>
        </div>
      </li>
    </div>
  )
}
export default BookShelfItem