import React from 'react';
import Avatar from "../images/avatar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Dina</span>
      <div className="user">
        <img
          src={Avatar}
          alt=""
        />
        <span>Henry</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar
