import React from 'react'
import "./Sellerprofile.css"
import { Link , Outlet } from 'react-router-dom';
import Sellerdashboard from './Sellerdashboard';

export default function 
() {
  return (
<div className='flexing-s-p'>
    <div className="forflex">
      {<Sellerdashboard/>}
    </div>

    <div className='sellerprofile'>
        <header>
        <div class="seller-info">
            <img src="/profile.jpg" alt=""/>
            <input type="file" id="file" accept="image/*" />
            <h6> <input placeholder='Edit name' /></h6>
            <h6><input placeholder='Edit address' /></h6>
        </div>
    </header>
    <main>
        {/* <section class="product-list">
            <h2>Products Available for Selling</h2>
            <form>
                <label for="product-name">Product Name:</label>
                <input type="text" id="product-name" name="product-name" required />

                <label for="product-price">Product Price:</label>
                <input type="text" id="product-price" name="product-price" required />
            </form>
            
        </section> */}
        <section class="seller-stats">
            <h2>seller Stats</h2>
            <form>
                <label for="total-bids">Total Bids:</label>
                <input type="text" id="total-bids" name="total-bids" value="100" readonly />

                <label for="bids-succeeded">Bids Succeeded:</label>
                <input type="text" id="bids-succeeded" name="bids-succeeded" value="50" readonly />
            </form>
        </section>
    </main>
    </div>
    </div>
  )
}
