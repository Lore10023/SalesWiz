import "../App.css";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function Login(){

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
    const togglePassword = () => {
      setShowPassword(prev => !prev);
    };

     const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in both username and password.");
      return;
    }
    navigate("/upload");
  };

  const handleBackPage=()=>{
    navigate("/");
  };

  return(
    <section className="Login--page--section">
      <div className="Login--page--content">
        <button onClick={handleBackPage} className="back--button--login">Back</button>
        <div className="Login--content--image">
          <img className="welcome--image" src="./img/loginpage.png" alt="Welcome"/>
        </div>
        <div className="Login--content--box">
          <h2 className="Login--content--title">Login</h2>
          <input className="Login--content--input" type="text" id="name" name="name" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} required/>
          <div className="SignUp--password--container">
                      <input
                        className="SignUp--content--input"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button type="button" onClick={togglePassword} className="SignUp--toggle--btn">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
          <p className="Login--content--forgot--password">Forgot password?</p>
          <button onClick={handleLogin} className="Login--content-btn">Login</button>
          <p className="Login--content--paragraph">Or Sign Up using</p>
          <div className="Login--content--btns">
            <button className="Login--btn facebook-btn">f</button>
            <button className="Login--btn google-btn">G+</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;