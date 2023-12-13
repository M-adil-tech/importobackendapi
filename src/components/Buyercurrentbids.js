import React, { useState, useEffect } from "react";
import "./Buyercurrentbids.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import Buyerdashboard from './Buyerdashboard';

export default function Buyercurrentbids() {
  const [currentBids, setCurrentBids] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/api/getbid`)
      .then((response) => {
        setCurrentBids(response.data.success);
        console.log("response", response.data.success[0]._id);
      })
      .catch((error) => {
        console.error("Error fetching current bids:", error);
      });
  }, []);

  const handleDelete = (bidId) => {
    // Implement Axios logic to delete the bid with the given bidId
    const data = {
      id: bidId
    };
  
    axios
      .post(`${BASE_URL}/api/deletebid`, data)
      .then((response) => {
        setCurrentBids(currentBids.filter((bid) => bid._id !== bidId));
      })
      .catch((error) => {
        console.error("Error deleting bid:", error);
      });
  
    console.log("data", data);
  };

  return (
    <div className="flexing-b-current">
      <div className="forflex">
        {<Buyerdashboard/>}
      </div>

      <div className="buyercurrentbids">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button type="button" id="searchButton">Search</button>
        </div>
        <div className="viewbids">
          <h1>Current Bids</h1>
        </div>
        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Location</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {Array.isArray(currentBids) && currentBids.map((bid, index) => (
                <tr key={bid.id}>
                  <td>{index + 1}</td>
                  <td>{bid.location}</td>
                  <td>{bid.category}</td>
                  <td>{bid.quantity}</td>
                  <td>{bid.price}</td>
                  <td>{bid.description}</td>
                  <td>
                    <div className="editbutton">
                    <button onClick={() => handleDelete(bid._id)}>Delete</button>
                      <Link to={`/Viewbidpriceb/${bid._id}`}>
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
