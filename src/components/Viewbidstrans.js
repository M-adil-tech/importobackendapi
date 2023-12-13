import React, { useState, useEffect } from "react";
import "./Viewbidstrans.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Dashboardtrans from './Dashboardtrans';

export default function Viewbidstrans() {
  const [liveBids, setLiveBids] = useState([]);

  useEffect(() => {
    // Fetch live bids from the server using Axios
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
    // Handle bid selection (e.g., navigate to a bid details page)
    // You can implement the behavior you want here.
    // For example:
    // history.push(/BidDetails/${bidId});
  };

  return (
    <div className="flexing-v-t">
      <div className="forflex">
        {<Dashboardtrans/>}
      </div>
     

      <div className="viewbidstrans">
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {liveBids.map((bid) => (
                <tr key={bid.id} onClick={() => selectBid(bid.id)}>
                  <td>{bid.quantity}</td>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                  <td>
                    <div className="editbuton">
                      <Link to={`/TransResponse/`}>
                        <button>Response</button>
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
  );
}