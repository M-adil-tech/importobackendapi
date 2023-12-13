import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL, LOCAL_URL } from '../constants';
import axios from "axios";
import { useUser } from "../useUser";


export default function Login() {
  const navigate = useNavigate();
  const { setEmail } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // role: "buyer",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${LOCAL_URL}/api/login`, formData, config);
      if (response.data.success) {
        setEmail(response.data.userdata.email);
        navigate(`/Main${response.data.userdata.role}`);
      } else {
        setError("Incorrect email or password. Please try again.");
        setFormData({ ...formData, role: "" });
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      setFormData({ ...formData, role: "" });
    }
  };

  return (
    <div className="mainlogin">
      <div className="outerdiv">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login">
          <div className="emaildiv ep">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="values"
            />
          </div>
          <div className="passdiv ep">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="values"
            />
          </div>
          {/* <div className="role-select">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="buyer">Buyer</option>
              <option value="transporter">Transporter</option>
              <option value="seller">Seller</option>
            </select>
          </div> */}
          <div className=" ">
            <button onClick={handleLogin}>Login</button>
          </div>
        </form>
        <div className="footer">
          <p className="foothead">------Don't have an Account.------</p>
          <div className="signbuton">
            <Link to="/Signupseller">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


