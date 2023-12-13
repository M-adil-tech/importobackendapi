import React from 'react'
import './Mainbuyer.css'
import { Link , Outlet } from 'react-router-dom';
import Chart from './Chart';
import { useUser } from "../useUser";
import Buyerdashboard from './Buyerdashboard';



export default function Mainbuyer () {
    const { user } = useUser();
  return (
<div className='flexingmainbuyer'>
    <div className="forflex">
      {<Buyerdashboard/>}
    </div>

    <div className='viewbuyerprofile'>
      <header>
        <div class="buyer-info">
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
        <section class="product-list">
            <Chart></Chart>
        </section>
        <section class="buyer-stats">
            <h2>Buyer Stats</h2>
            <table>
                <tr>
                    <th>Total Bids:</th>
                    <th>Bids Succeeded:</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>50</td>
                </tr>
            </table>
        </section>
        </div>
    </main>
    </div>
    </div>
  )
}
