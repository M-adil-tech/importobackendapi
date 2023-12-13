import React from 'react'
import './Mainseller.css'
import { Link , Outlet } from 'react-router-dom';
import { useUser } from "../useUser";
import Sellerdashboard from './Sellerdashboard';


export default function Mainbuyer () {

    const { user } = useUser();
  return (
    <div className='flexing-main-s'>
    <div className="forflex">
      {<Sellerdashboard/>}
      </div>

    <div className='viewsellerprofile'>
      <header>
        <div class="seller-info">
            <div className='imgdiv' >
                <img src="/profile.jpg" alt=""/>
            </div>
            <div className='namediv'>
            <h6>Name : {user}</h6>
            </div>
        </div>
    </header>
    <main>
        <div className='tablebox' >
        {/* <section class="product-list">
            <h2>Products Exported</h2>
            <table>
                <tr>
                    <th>Product Name:</th>
                    <th>Product Quantity:</th>
                    <th>Product Price:</th>
                </tr>
                <tr>
                    <td>Wheat</td>
                    <td>10kg</td>
                    <td>1000$</td>
                </tr>
            </table>
        </section> */}
        <section class="seller-stats">
            <h2>Seller Stats</h2>
            <table>
                <tr>
                    <th>Total Bids:</th>
                    <th>Bids Succeeded:</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>34</td>
                </tr>
            </table>
        </section>
        </div>
    </main>
    </div>
    </div>
  )
}