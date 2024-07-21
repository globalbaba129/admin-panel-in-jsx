import "./sidebar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link className="active" to="/indes">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Rooms">Rooms</Link>
      </li>
      <li>
        <Link to="/Order">Orders</Link>
      </li>
      <li>
        <Link to="/Checkout">Checkout</Link>
      </li>
      <li>
        <Link to="/Security">Security</Link>
      </li>
      <li>
        <Link to="/Maintenance">Maintenance</Link>
      </li>
      <li>
        <Link to="/Inventory">Inventory</Link>
      </li>
      <li>
        <Link to="/Admin-Setting">AdminSettings</Link>
      </li>
      <li>
        <Link to="/POS">POS</Link>
      </li>
      <li>
        <Link to="/CRM">CRM</Link>
      </li>
    
    
    </ul>
  );
};

export default Navbar;
