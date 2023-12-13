import React, { useState, useEffect } from "react";
import "./Sellercurrentbids.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Sellerdashboard from './Sellerdashboard';
import { BASE_URL } from "../constants";

export default function Sellercurrentbids() {
  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    // Fetch current bids from the server using Axios
    axios
      .post(`${BASE_URL}/api/getbid`)
      .then((response) => {
        setCurrentBids(response.data.success);
      })
      .catch((error) => {
        console.error("Error fetching current bids:", error);
      });
  }, []);

  const selectBid = (bidId) => {
    // Handle bid selection (e.g., navigate to a bid details page)
    // You can implement the behavior you want here.
  };

  const handleDelete = (bidId) => {
    // Implement Axios logic to delete the bid with the given bidId
    axios
      .delete(`your-api-endpoint-for-deleting-bid/${bidId}`)
      .then((response) => {
        // Handle success, such as removing the bid from the currentBids state
        setCurrentBids(currentBids.filter((bid) => bid.id !== bidId));
      })
      .catch((error) => {
        console.error("Error deleting bid:", error);
      });
  };

  return (
    <div className="flexing-s-cb">
      <div className="forflex">
        {<Sellerdashboard/>}
      </div>

      <div className="sellercurrentbids">
        <div className="viewbids">
          <h1>My Bids</h1>
        </div>
        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentBids.map((bid) => (
                <tr key={bid.id}>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.quantity}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                  <td>
                    <div className="editbutton">
                      <button onClick={() => handleDelete(bid.id)}>Delete</button>
                      <Link to={`/Viewbidprices/`}>
                        <button>Bidings</button>
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