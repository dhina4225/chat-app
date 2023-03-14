import React from 'react';
import Avatar from '../images/avatar.png';



const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Avatar} alt="avatar" className='justNow'/>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Avatar} alt="avatar" className='chatImage'/>
      </div>
    </div>
  );
}

export default Message
