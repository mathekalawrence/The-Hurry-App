import React from 'react';
import './Profile.css';

const Profile=({firstName, lastName, age})=>{

    return(
         <div className="profile-card">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-field">
          <span className="label">First Name:</span>
          <span className="value">{firstName}</span>
        </div>
        <div className="profile-field">
          <span className="label">Last Name:</span>
          <span className="value">{lastName}</span>
        </div>
        <div className="profile-field">
          <span className="label">Age:</span>
          <span className="value">{age} years old</span>
        </div>
      </div>
    </div>

    );

};
export default Profile;

