import React from 'react'
import { Link } from 'react-router-dom';
import "./Sellerdashboard.css"

export default function Sellerdashboard() {
  return (
    <div  >
      <div className="dashboardseller">
      <hr/>
      <div className="option" >
            <Link to="/Mainseller">
              <button> 
              <img className='dashboardicon' src="homeicon.png" alt="" /> Home 
              </button>
            </Link>
        </div>
        <div className="option" >
            <Link to="/Viewbidsseller">
              <button> 
              <img className='dashboardicon' src="search.png" alt="" /> View bids
              </button>
            </Link>
        </div>
        <div className="option" >
            <Link to="/Bidcreatebyseller"> 
              <button>
              <i class="fa-solid fa-plus dashboardicon" style={{color: `#ffffff`}}></i>  Create Bid 
              </button>
            </Link>
        </div>
        <div className="option">
            <Link to="/Sellercurrentbids"> 
              <button> 
                <img className='dashboardicon' src="law.png" alt="" />My Bids 
              </button>
            </Link>
        </div>
        <div className="option">
            <Link to="/Sellerprofile"> 
              <button>
                <img className='dashboardicon' src="profileicon.png" alt="" /> Manage Profile 
              </button>
            </Link>
        </div>
    </div>
    </div>
  )
}
