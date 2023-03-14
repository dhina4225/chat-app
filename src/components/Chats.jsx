import React from 'react';
import Avatar from "../images/avatar.png";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src={Avatar}
          alt=""
        />
        <div className="userChatInfo">
          <span>Harley</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src={Avatar}
          alt=""
        />
        <div className="userChatInfo">
          <span>Harley</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src={Avatar}
          alt=""
        />
        <div className="userChatInfo">
          <span>Harley</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats
