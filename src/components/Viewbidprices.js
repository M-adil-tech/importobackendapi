import React from 'react'
import "./Viewbidprices.css"
import { Link } from 'react-router-dom'
import Sellerdashboard from './Sellerdashboard';

export default function Viewbidprices() {
  return (

    <div className='flexing'>
    <div className="forflex">
        {<Sellerdashboard/>}
      </div>

    <div>
      <div className='viewbidprices'>
      <div className='heading'>
        <h1>Bid Response By Transporters</h1>
      </div>
     <div className='bidprice'>
    <table border="1">
        <tr>
            <th>Location</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Bidding Price</th>
            <th>Description</th>
            <th></th>
        </tr>
        <tr>
            <td>Lahore</td>
            <td> 1 </td>
            <td>Cotton</td>
            <td>$1000</td>
            <td>ok</td>
            <td>
                    <div className="viewbutton">
                    <Link to="" >
                        <button>
                            Accept
                        </button>
                    </Link>
                    <Link to="" >
                        <button>
                            Delete
                        </button>
                    </Link>
                    </div>
                </td>
        </tr>
        {/* <tr>
            <td>Seller 2</td>
            <td>Address 2</td>
            <td>2023-10-11</td>
            <td>$800</td>
        </tr> */}
    </table>
    </div>
    </div>
    </div>
    </div>
  )
}
