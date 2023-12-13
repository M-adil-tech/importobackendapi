import React from 'react'
import './Signupoption.css'
import { Link, Outlet } from 'react-router-dom';

 export default function Signupoption () {
  return (
    <div className='mainoption'>
        <div className="outerdiv">
          <div className="signupheading">
            <h2>
              Join as a Seller, Buyer or Transporter. 
            </h2>
          </div>
            <div className="signuplist">
              <div className='opt seller' >
                <div className="inopt iconbox">
                  <Link className="logo" to="/" ><img src="/sellicon.png" /> </Link>
                </div>  
                <div className="inopt">
                  I'm a Seller.
                  Looking for selling products.
                </div>
                <div className="inopt">
                  <Link to="/SignUpseller"  >
                    <button> SignUp </button> 
                  </Link>
                </div> 
              </div>

              <div className='opt buyer'>  
                <div className="inopt iconbox">
                  <Link className="logo" to="/" ><img src="/buyicon.png"  alt="" /></Link>
                </div>  
              <div className="inopt">
                  I'm a Buyer.
                  Need products.
                </div>
                <div className="inopt">
                <Link to="/SignUpseller"  > 
                  <button> SignUp </button> 
                </Link>
                </div>
              </div>
        
              <div className='opt transporter'> 
                <div className="inopt iconbox">
                  <Link className="logo" to="/" ><img src="/transporticon.png"  alt="" /></Link>
                </div>  
                <div className="inopt">
                  I'm a Transporter.
                  Looking for Orders.
                </div>
                <div className="inopt">
                <Link to="/SignUpseller"  > 
                  <button> SignUp </button>
                </Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

{/* <ul className="signuplist">
              <li className='opt seller' >  <Link to="/SignUpseller"  ><button> SignUp as Seller</button> </Link></li>
              <li className='opt buyer'>  <Link to="/SignUpseller"  > <button>SignUp as Buyer</button> </Link></li>
              <li className='opt transporter'> <Link to="/SignUpseller"  > <button>SignUp as Transporter</button> </Link></li>
            </ul> */}