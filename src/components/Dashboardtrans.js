import React from 'react'
import { Link } from 'react-router-dom';
import "./Dashboardtrans.css"

export default function Dashboardtrans() {
  return (
    <div  >
      <div className="dashboardtrans">
      <hr/>
      <div className="option" >
            <Link to="/Maintransporter">
              <button> 
              <img className='dashboardicon' src="homeicon.png" alt="" /> Home 
              </button>
            </Link>
        </div>
        <div className="option">
            <Link to="/Viewbidstrans"> 
              <button>
                <img className='dashboardicon' src="profileicon.png" alt="" /> View Bids 
              </button>
            </Link>
        </div>
        <div className="option">
            <Link to="/Transporterprofile"> 
              <button>
                <img className='dashboardicon' src="profileicon.png" alt="" /> Manage Profile 
              </button>
            </Link>
        </div>
    </div>
    </div>
  )
}
