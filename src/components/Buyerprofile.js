import React from 'react'
import "./Buyerprofile.css"
import { Link } from 'react-router-dom';
import Buyerdashboard from './Buyerdashboard';

export default function 
() {
  return (
<div className='flexing-b-profile'>
    <div className="forflex">
      {<Buyerdashboard/>}
    </div>

    <div className='buyerprofile'>  
        <header>
        <div class="buyer-info">
            {/* <img src="/profile.jpg" alt=""/>
            <input type="file" id="file" accept="image/*" /> */}
            <h6> <input placeholder='Edit name' /></h6>
            <h6><input placeholder='Edit address' /></h6>
        </div>
    </header>
    <main>
        <section class="buyer-stats">
            <h2>Buyer Stats</h2>
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
