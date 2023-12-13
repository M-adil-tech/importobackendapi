import React, { useState } from "react";
import axios from "axios";
import "./Bidcreatebybuyer.css";
import { Link, Outlet } from "react-router-dom";
import { BASE_URL } from "../constants";
import Buyerdashboard from './Buyerdashboard';

export default function Bidcreatebybuyer() {
  const [formData, setFormData] = useState({
    location: "",
    category: "Cotton",
    price: "",
    quantity: "",
    description: "",
  });
  
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/createbid`, formData);

      if (response.data.success) {
        setResponseMessage("Bid submitted successfully!");
      } else {
        setResponseMessage("Bid submission failed. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flexingbidbuyer">
      <div className="forflex">
        {<Buyerdashboard/>}
      </div>

      <div className="bidcreation">
        <h1 className="heading">Create Bid for Seller</h1>

        <form className="bidForm" onSubmit={handleSubmit}>
          <div className="bidreq">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="location require"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Location"
            />

            <label htmlFor="category">Category</label>
            <select
              className="category require"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Cotton">Cotton</option>
              <option value="Yarn">Yarn</option>
              <option value="Wheat">Wheat</option>
            </select>

            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="price require"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Price"
            />

            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="quantity require"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              placeholder="Quantity"
            />

            <label htmlFor="description">Description</label>
            <textarea
              className="description require"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              placeholder="Description"
            ></textarea>

            <input type="submit" value="Submit" />
          </div>
          <p>{responseMessage}</p>
        </form>
      </div>
    </div>
  );
}