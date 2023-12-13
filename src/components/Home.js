import React from "react";
import  './Home.css';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="homecontainer" >
      <div className="flexdiv">
      <div className="outerdiv">
        <div className="upperdiv">
          <h1 className="ul heading">
            An Application that helps vendors and bussiness owners. 
          </h1>
          <h4 className="ul 2heading">

          </h4>
        
        <div className="lowerdiv">
            {/* <h6 className="trust">
            Trusted by
          </h6>
          <div className="trustimg">
             <a href="/" className="logos">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png"  alt="" />
            </a> 
           </div>   */}
          </div>
          <div className="signup">
            <Link to="/Signupseller" className="signupbuton">
              <button>
                Get started!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="imgdiv">
          <a href="/" className="sideimg">
              <img src="main-img.avif" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

// https://img.freepik.com/free-vector/import-export-infographic-hand-drawn_23-2149165167.jpg?w=2000