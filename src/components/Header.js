import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const Header = ({ orders, onDelete }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const calculateTotal = (orders) => {
    return orders.reduce(
      (total, order) => total + Number.parseFloat(order.price),
      0
    );
  };

  const OrdersList = () => {
    const total = calculateTotal(orders);

    return (
      <div>
        {orders.map((order) => (
          <Order onDelete={onDelete} key={order.id} item={order} />
        ))}
        <p className="total">Total: {new Intl.NumberFormat().format(total)}$</p>
      </div>
    );
  };

  const EmptyCart = () => (
    <div className="empty">
      <h2>You have no items in your order</h2>
    </div>
  );

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
            {orders.length > 0 ? <OrdersList /> : <EmptyCart />}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
