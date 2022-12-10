import React from 'react'
import UndrawBooks from '../assets/Undraw_Reading.svg'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>The place to get lost in a world of books</h1>
                    <h2>Our doors are always open at <span className='special'>Book House</span></h2>
                    <Link to="/books">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className='header__img--wrapper'>
                    <img src={UndrawBooks} alt="" className="" />
                </figure>
            </div>
        </header>
    </section>
  )
}
