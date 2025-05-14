import { IoIosCloseCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./UserDash.css";

function NavigBar(){

  const [isOpen, setIsOpen]=useState(false);
  return (

    <>
      <div className="navigation--bar--container">
      <div className="icon--container">
        {!isOpen ? (
          <div className="hamburger" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
          </div>
        ) : (
          <IoIosCloseCircleOutline
            size={28}
            className="close-icon"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
      <div className="image--container">
        <img className="logo--image" src="./img/logo2.png" />
      </div>
    </div>

    <Sidebar isOpen={isOpen} />
    </>
  );
}

export default NavigBar;