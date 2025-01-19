import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h3>Devon Lane</h3>
      <p>Inventory Manager</p>
      <ul>
        <li>My Profile</li>
        <li>Ticket</li>
        <li>Change Password</li>
      </ul>
      <div className="support">
        <p>Support</p>
        <p>📞 9863656236</p>
        <p>📧 support@gmail.com</p>
      </div>
      <button className="logout">Logout</button>
    </div>
  );
};

export default ProfileCard;
