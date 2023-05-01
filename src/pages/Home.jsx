import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Profile from "../components/Profile";


const Home = () => {
  return (
    <div className="home">
      <div className="container">
        {/* <Sidebar/>
        <Chat/> */}
        <Profile />

      </div>
    </div>
  );
};

export default Home;
