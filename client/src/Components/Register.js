import React, { useState } from 'react'
import axios from "axios";
import { FaLock, FaUser } from 'react-icons/fa';
const Register = ({onBackToLogin}) => {
   const [usernamereg, setusernamereg] = useState();
   const [passreg, setpassreg] = useState();

     const handlechange = (e) => {
       setusernamereg(e.target.value);
     };

     const handlechangepass = (e) => {
       setpassreg(e.target.value);
     };
const register = () => {
  axios
    .post("http://localhost:8000/register", {
      username: usernamereg,
      password: passreg,
    })
    .then((res) => {
      console.log(res.data);
    });
  setusernamereg("");
  setpassreg("");
};
  return (
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={usernamereg}
            onChange={handlechange}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            onChange={handlechangepass}
            value={passreg}
            required
          />
          <FaLock className="icon" />
        </div>

       
        <button type="submit" onClick={register}>
          Register
        </button>
        <div className="regpage">
         Already have an account <p onClick={onBackToLogin}>login</p>
        </div>
      </form>
    </div>
  );
}

export default Register