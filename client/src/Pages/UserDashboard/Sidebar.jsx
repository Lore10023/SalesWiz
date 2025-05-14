import React from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { BsClipboardData } from 'react-icons/bs';
import { TbMessageChatbot } from 'react-icons/tb';
import { CiLogout } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";
import { RiDatabaseLine } from "react-icons/ri";
import "./UserDash.css";
import { Link } from 'react-router-dom';

function Sidebar({isOpen}){
  return(
    <nav className={`side--bar ${isOpen ? 'open' : 'closed'}`}>
       <div className="side--bar--links profile">
        <Link to="profile" className="links">
          <CgProfile className='profile--logo' />
          <div>My Profile</div>
        </Link>
      </div>
       <div className="side--bar--links">
        <Link to="upload" className="links">
          <IoCloudUploadOutline />
          <div>Upload</div>
        </Link>
      </div>
      <div className="side--bar--links">
        <Link to="/analyze" className="links">
          <BsClipboardData />
          <div>Analyze Data</div>
        </Link>
      </div>
      <div className="side--bar--links">
        <Link to="forecast" className="links">
          <RiDatabaseLine />
          <div>Forecast Data</div>
        </Link>
      </div>
      <div className="side--bar--links">
        <Link to="chatbot" className="links">
          <TbMessageChatbot />
          <div>Chat Bot</div>
        </Link>
      </div>
      <div className="side--bar--links">
        <Link to='login' className="links">
          <CiLogout />
          <div>Logout</div>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;