import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/logo.png";
import { useNavigate, Link } from "react-router-dom"


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <div className="user">
        <img src={currentUser.photoURL} alt="" />

        <span><Link to="/Profile" className="profile-view">{currentUser.displayName}</Link>
        </span>



        <button onClick={() => signOut(auth)} className="logout-btn">
          Logout
        </button>
      </div>
    </div >


  );
};

export default Navbar;