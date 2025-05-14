import "../App.css";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function SignUp(){

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSignup = () =>{
  if(username.trim()==="" || password.trim()==="" || email.trim()===""){
    alert("Make sure you complete all three fields.");
    return;
  }
  navigate("/upload");
  };

  const handleBackPage=()=>{
    navigate("/");
  };

  return(
    <section className="SignUp--page--section">
      <div className="SignUp--page--content">
        <button onClick={handleBackPage} className="back--button--login">Back</button>
        <div className="SignUp--content--image">
          <img className="welcome--image" src="./img/welcome_signup.png" alt="Welcome"/>
        </div>
        <div className="SignUp--content--box">
          <h2 className="SignUp--content--title">Create Account</h2>
          <div className="SignUp--content--btns">
            <button className="SignUp--btn facebook-btn">f</button>
            <button className="SignUp--btn google-btn">G+</button>
          </div>
          <p className="SignUp--content--paragraph">or use your email for registration:</p>
          <input className="SignUp--content--input" type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} required/>
          <input className="SignUp--content--input" type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <div className="SignUp--password--container">
            <input
              className="SignUp--content--input"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePassword} className="SignUp--toggle--btn">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button onClick={handleSignup} className="SignUp--content-btn">Sign Up</button>
        </div>
      </div>
    </section>
  );
}

export default SignUp;