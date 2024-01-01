import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Signup.css";
import bgimg from "../../assests/loginbg.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setrememberMe] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        className="signUp_Screen_bg"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="signUp_Screen">
          <form onSubmit={handleClick}>
            <h1>Signup</h1>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address..."
            />
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password..."
            />
            <button type="submit" className="signup_screen_btn">
              Sign Up
            </button>
            <form className="remember_form">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setrememberMe(!rememberMe)}
              />
              <span>Remember Me</span>
            </form>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
