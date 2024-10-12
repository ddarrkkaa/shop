import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((order) => {
    total += Number.parseFloat(order.price);
  });
  return (
    <div>
      {props.orders.map((order) => (
        <Order onDelete={props.onDelete} key={order.id} item={order} />
      ))}
      <p className="total">Total:{new Intl.NumberFormat().format(total)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>You have no items in your order</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
    </header>
  );
}
