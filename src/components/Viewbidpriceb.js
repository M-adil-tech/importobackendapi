//import React from 'react'
import "./Viewbidpriceb.css"
import { Link } from 'react-router-dom';
import Buyerdashboard from './Buyerdashboard';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function Viewbidpriceb() {
  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/api/getBidResponse`)
      .then((response) => {
        console.log("response", response.data)
        setCurrentBids(response.data.success);
      })
      .catch((error) => {
        console.error("Error fetching current bids:", error);
      });
  }, []);



  return (
<div className='flexingviewb'>
    <div className="forflex">
      {<Buyerdashboard/>}
    </div>

    <div className='viewbidpriceb'>
      <div className='heading'>
        <h1>Bid Response By Sellers</h1>
      </div>
     <div className='bidprice'>
    <table border="1">
      <thead>
        <tr>
            <th>Location</th>
            <th>category</th>
            <th>quantity</th>
            <th>Bidding Price</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        </tbody>
        <tbody>
              {Array.isArray(currentBids) && currentBids.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.quantity}</td>
                  <td>{bid.Qouteprice}</td>
                  <td>{bid.description}</td>
                  <td>
                  <div className="viewbutton">
                    <Link to={``}>
                    <button>Delete</button> 
                    </Link>
                    <Link to={`/Buyerpayment/`}>
                      <button>Accept</button>
                    </Link>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
    </table>
    </div>
    </div>
    </div>
  )
}
