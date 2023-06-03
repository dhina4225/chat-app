import React from 'react';
import { MdClose } from "react-icons/md"

const Profile = (setShowProfile) => {
    return (
        <div className="layer-opacity">
        <div className='profile-container'>
            <span className='close-btn' onClick={()=>setShowProfile(false)}>
                <MdClose />
                <span>close</span>
            </span>
            <div className='form-control'>
                <img src="" alt="" />
                <div className='form-group'>
                    <label For="first-name">First-Name:</label>
                        <input type="text" placeholder='First Name' />
                    <label For="first-name">Last-Name:</label>
                        <input type="text" placeholder='Last Name' />
                </div>
                <div className='form-group'>
                    <label For="email">E-Mail:
                        <input type="e-mail" name='email'/></label>
                    <label For="password">Password:
                    </label>
                        <input type="password" name='password'/>
                </div>
                <label For="phone-number">Phone-Number:</label>
                    <input type="number" placeholder='Phone Number' />
                <button className='save-btn'>Save Changes</button>
            </div>
            </div>
            </div>
    );
}

export default Profile;
