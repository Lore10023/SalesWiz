import React from "react";
import "./UserDash.css";
import { CgProfile } from "react-icons/cg";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-avatar">
          <CgProfile size={80} />
        </div>
        <h2 className="profile-name">John Doe</h2>
        <div className="profile-info">
          <div className="des1"><strong>Email:</strong> john@example.com</div>
          <div className="des1"><strong>Joined:</strong> Jan 2023</div>
        </div>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}

export default ProfilePage;
