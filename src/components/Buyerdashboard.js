import React from 'react'
import { Link } from 'react-router-dom';
import "./Buyerdashboard.css"

export default function Buyerdashboard() {
  return (
    <div  >
      <div className="dashboardmain">
      <hr/>
      <div className="option" >
            <Link to="/Mainbuyer">
              <button> 
              <img className='dashboardicon' src="homeicon.png" alt="" /> Home 
              </button>
            </Link>
        </div>
        <div className="option" >
            <Link to="/Bidcreatebybuyer"> 
              <button>
              <i className="fa-solid fa-plus dashboardicon" style={{color: `#ffffff`}}></i>  Create Bid 
              </button>
            </Link>
        </div>
        <div className="option">
            <Link to="/Buyercurrentbids"> 
              <button> 
                <img className='dashboardicon' src="law.png" alt="" />My Bids 
              </button>
            </Link>
        </div>
        <div className="option">
            <Link to="/Buyerprofile"> 
              <button>
                <img className='dashboardicon' src="profileicon.png" alt="" /> Manage Profile 
              </button>
            </Link>
        </div>
    </div>
    </div>
  )
}
