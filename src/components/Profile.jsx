import React from 'react';
import { MdClose } from "react-icons/md";
import profile from "../images/profile.png";
import { Link } from 'react-router-dom';

const Profile = ( setShowProfile ) => (
    
    <div className="layer-opacity">
        <div className='profile-container'>
            <div className='form-control'>
                <span className='close-btn' onClick={ () => setShowProfile(false) }>
                    <MdClose />
                    <span>close</span>
                </span>
                <img src={profile} alt="" />
                <div className='form-group'>
                    <label For="first-name">First-Name:</label>
                    <input type="text" placeholder='First Name' />
                    <label For="first-name">Last-Name:</label>
                    <input type="text" placeholder='Last Name' />
                    <label For="email">E-Mail:</label>
                        <input type="e-mail" name='email' />
                    <label For="password">Password:
                    </label>
                    <input type="password" name='password' />
                <label For="phone-number">Phone-Number:</label>
                    <input type="number" placeholder='Phone Number' />
                    
                    <button className='save-btn' ><Link to="/home">Save Changes</Link></button>
                </div>
                    
            </div>
        </div>
    </div>
)

export default Profile;
