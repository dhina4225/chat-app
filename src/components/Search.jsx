import React from 'react';
import Avatar from "../images/avatar.png";

const search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img
          src={Avatar}
          alt=""
        />
        <div className="userChatInfo">
            <span>Harley</span>
        </div>
      </div>
    </div>
  );
}

export default search
