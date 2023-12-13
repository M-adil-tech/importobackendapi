import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from '../constants';
import axios from "axios";
import "./SignUpseller.css"

export default function SignUpseller(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "buyer", // Default role is set to "buyer"
  });
  
  const [responseMessage, setResponseMessage] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(`${BASE_URL}/api/register`, formData, config);

      if (response.data.success) {
        setSignupSuccess(true);
      } else {
        setResponseMessage("Signup failed. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className='main'>
        <div className='mainimg'>
          <a href="/" className="sideimg">
            <img src="/loginimg2.webp" alt="" />
          </a>
        </div>
        <div className="maindiv">
          {signupSuccess ? (
            <>
              <h2>Signup Successful!</h2>
              <p>Now, you can log in using your credentials.</p>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </>
          ) : (
            <>
              <h2>Signup</h2>
              <form className="mainform" onSubmit={handleSubmit}>
                <div className="feilds" >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
                </div>
                <div className="feilds" >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                </div>
                <div className="feilds" >
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                </div>
                <div className="feilds" >
                  <label htmlFor="role">Role:</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >

                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="transporter">Transporter</option>
                  </select>
                </div>
                <div className="feilds" >
                <button type="submit">Sign Up</button>
                </div>
              </form>
              <p>{responseMessage}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}