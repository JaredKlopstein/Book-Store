import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Book from './ui/Book'
import {books} from '../data.js'

export default function Featured() {

  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className='purple'>Books</span>
                </h2>
                <div className="books">
                    {books
                    .filter(books => books.rating === 5)
                    .slice(0,4)
                    .map((book) => 
                    <Book book={book} key={book.id}></Book>)}
                </div>
            </div>
        </div>
    </section>
  )
}
