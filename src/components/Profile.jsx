import React from 'react';


const Profile = () => {

    return (
        <div>
            <div className='form-control col-6'>
                <img src="" alt="" />
                <div className='form-group'>
                    <label For="first-name">First-Name:
                        <input type="text" placeholder='First Name' /></label>
                    <label For="first-name">Last-Name:
                        <input type="text" placeholder='Last Name' /></label>
                </div>
                <div className='form-group'>
                    <label For="first-name">E-Mail:
                        <input type="e-mail" /></label>
                    <label For="first-name">Password:

                        <input type="password" /></label>
                </div>
                <label For="first-name">Phone-Number:

                    <input type="number" placeholder='Phone Number' /></label>
                <button className='save-btn'>Save Changes</button>
            </div>
        </div>
    );
}

export default Profile;
