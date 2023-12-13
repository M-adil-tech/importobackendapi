import React, { useState, useEffect } from "react";
import "./Buyerpayment.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Buyerdashboard from './Buyerdashboard';

export default function Buyerpayment() {
    return (

    <div className="flexing-b-p">
        <div className="forflex">
            {<Buyerdashboard/>}
        </div>
    <div className="buyerpayment">
        {/* <h1> Payment </h1> */}
        <form id="payment-form">

        <input type="text" className="amount" placeholder="Total Amount" required/>

        <div className="name">
        <input type="text" id="fname" placeholder="First name" required />
        <input type="text" id="lname" placeholder="Last name" required/>
        </div>

        
        <input type="text" id="card-number" placeholder="Card Number" required/>
        
        <div className="name">
        <input type="text" id="cvv" placeholder="CVV" required/>
        <input type="text" id="expiry" placeholder="MM/YY" required/>
        </div>
        
        <button type="submit">Pay Now</button>
        </form>
        <div id="payment-status"></div>
    </div>
    </div>
    )
}