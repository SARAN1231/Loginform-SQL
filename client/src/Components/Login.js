import axios from 'axios';
import React, { useState } from 'react'
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../login.css"

const Login = ({ onRegisterClick }) => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const [loginstatus, setloginstatus] = useState("");

  const handlechange1 = (e) => {
    setusername(e.target.value);
  };
  const handlechangepass1 = (e) => {
    setpassword(e.target.value);
  };

  const login = () => {
    axios
      .post("http://localhost:8000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          setloginstatus(res.data.message);
        } else {
          setloginstatus(res.data[0].username + " Login Succesfull");
        }
      });
    setusername("");
    setpassword("");
  };
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handlechange1}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={handlechangepass1}
            value={password}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="forget">
          <label>
            <input type="checkbox" /> remember me
          </label>
          <a href="#"> Forgot password</a>
        </div>
        <button type="submit" onClick={login}>
          Login
        </button>
        <div className="regpage">
          Don't have an account <p onClick={onRegisterClick}>Register</p>
        </div>
        <h1>{loginstatus}</h1>
      </form>
    </div>
  );
};

export default Login