import React, { useState } from "react";
import bgImg from "../../assests/loginbg.jpg";
import Logo from "../../assests/logo.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../utlis/Redux/Apicalls.js";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    console.log("ha chal raha");
    e.preventDefault();
    if (email === "") {
      toast.error("Please Enter Your Email");
    }
    if (!email) {
      toast.error("Your email is not available!");
    }
    login(dispatch, { email });
    toast.success("Login Successful", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
    });
    setTimeout(()=>navigate('/'),1500)
  };

  return (
    <>
      <div
        className="loginScreen"
        style={{
          background: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="login_screen_background">
          <img className="login_screen_logo" src={Logo} alt="logo" />
          <Link to={"/signup"}>
            <button className="login_screen_btn">Sign Up</button>
          </Link>
          <div className="loginscreen_gradient"></div>
        </div>
        <div className="login_screen_body">
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anymore. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your Email to create or Restart your
            membership
          </h3>
          <div className="login_screen_input">
            <form>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email address..."
              />
              <button onClick={handleLogin} type="submit" className="login_screen_start">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
