import React, { useEffect } from "react";
import "./NavBar.css";
import { Link,  Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../useUser"; // Import useUser hook
import { BASE_URL } from "../constants";
import axios from "axios";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, setUser, email,setEmail } = useUser(); // UserContext

  const handleLogout = () => {
 
    setUser(null);
    setEmail(null);
    navigate("/Login");
  };

  useEffect(() => {
    
   
    axios.get(`${BASE_URL}/api/getusers`)
    .then((response) => {
      const users = response.data.users; 
  
      const userEmailToFind =email; 
      const foundUser = users.find((user) => user.email === userEmailToFind);
  
      if (foundUser) {
         setUser(foundUser.username)
        
      } else {
        console.log("User not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
  
  }, [email]);
  return (
    <>
      <div className="navbar">
        <div className="imgbox">
          <Link className="logo" to="/">
            <img src="/logomain.png" alt="" />
          </Link>
        </div>
        <ul className="nav-links">
          {user ? ( // Check if the user is logged in
            <div style={{color:'white'}}>
              <li >Hello  {user}</li>
              <li onClick={handleLogout}>Logout</li>
            </div>
          ) : (
            <>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Signupseller">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>{" "}
      <Outlet />
    </>
  );
}