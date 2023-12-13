import React, { useState, useEffect } from "react";
import "./Viewbidsseller.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Sellerdashboard from './Sellerdashboard';

export default function Viewbidsseller() {
  const [liveBids, setLiveBids] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/api/getbid`)
      .then((response) => {
        setLiveBids(response.data.success);
      })
      .catch((error) => {
        console.error("Error fetching live bids:", error);
      });
  }, []);

  const selectBid = (bidId) => {
    console.log("bid id", bidId);
    // Handle bid selection (e.g., navigate to a bid details page)
    // You can implement the behavior you want here.
    // For example:
    // history.push(/BidDetails/${bidId});
  };

  return (
    <div className="flexing-v-s">
      <div className="forflex">
        {<Sellerdashboard/>}
      </div>

      <div className="viewbidsseller">
        <h1>Live Bids</h1>
        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Location</th>
                <th>Category</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             
              {liveBids.map((bid) => (
                <tr key={bid._id} onClick={() => selectBid(bid._id)}>
                  <td>{bid.quantity}</td>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                  <td>
                    <Link to={`/SellerResponse/${bid._id}`}>
                        <button>Response</button>
                    </Link>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}