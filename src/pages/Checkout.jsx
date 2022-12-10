import React from "react";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyCart from '../assets/empty_cart.svg'
export default function Checkout({ cart }) {
  return (
    <div className="books__body">
      <div className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="checkout__wrapper">
              <div className="cart__summary">
                <h2 className="checkout__title">Order Summary</h2>
                <div className="order__summary">
                {cart.map((book) => {
                    return (
                        <div className="checkout__item">
                      <div className="checkout__book">
                        <img
                          className="checkout__book--img"
                          src={book.url}
                          alt=""
                          />
                        <div className="checkout__book--info">
                          <span className="checkout__book--title">
                            {book.title}
                          </span>
                        </div>
                        <span className="checkout__book--price">
                        ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
                </div>
                {cart.length <= 0 && <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img"/>
                <h2>You have nothing in your cart!</h2>
              </div>}
              <div className="order__summary-btn">
                <Link to="/books">
              <button className="btn">Continue Shopping</button>
                </Link>
              </div>
              </div>
              
              <div className="payment__info">
                <h2 className="checkout__title">Checkout Info</h2>
                <div className="address__info">
                    <div className="checkout__section--title">Shipping Address</div>
                    <input placeholder="Name" className="checkout__input" type="text" name="name"/>
                    <input placeholder="Email" className="checkout__input" type="email" name="name"/>
                    <input placeholder="Address" className="checkout__input" type="text" name="name"/>
                    <input placeholder="City" className="checkout__input" type="text" name="name"/>
                    <input placeholder="State" className="checkout__input" type="text" name="name"/>
                    <div>
                        <label for="billing">Billing same as Shipping </label>
                        <input id="billing" name="payment-method" type="checkbox"/>
                    </div>
                </div>
                <div className="payment__selector">
                <div class="card-details">
            <h3 class="checkout__section--title">Credit Card Details</h3>
              <div class="form-group col-sm-7">
                <input id="card-holder" type="text" class="checkout__input" placeholder="Card Holder" aria-label="Card Holder"/>
                <input id="card-number" type="text" class="checkout__input" placeholder="Card Number" aria-label="Card Holder"/>
              </div>
              <div class="form-group cvv-exp">
                <div class="input-group expiration-date">
                  <input type="text" class="checkout__input checkout__input-half" placeholder="MM" aria-label="MM"/>
                  <span class="date-separator">/</span>
                  <input type="text" class="checkout__input checkout__input-half" placeholder="YY" aria-label="YY"/>
                </div>
              <div class="form-group cvv">
                    <input id="cvc" type="text" class="checkout__input" placeholder="CVC" aria-label="Card Holder"/>
              </div>
              </div>
            </div>
                  <div className="order__summary-btn">
                <Link to="/books">
              <button className="btn no-cursor">Pay Now</button>
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
