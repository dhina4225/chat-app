import React, { useContext, useState} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Profile  from "./Profile";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <div className="user">
        <img src={currentUser.photoURL} alt="" onClick={()=>setShowProfile(true)}/>

        <span><Link to="/Profile" className="profile-view">{currentUser.displayName}</Link>
        </span>



        <button onClick={() => signOut(auth)} className="logout-btn">
          Logout
        </button>
      </div>

      {showProfile && <Profile setShowProfile={setShowProfile} />}
    </div >


  );
};

export default Navbar;