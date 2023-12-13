import React from 'react'
import './Biddetails.css'

export default function Biddetails() {
  return (
    <div className='biddetails'>
         <h1 className='heading'>
            Bid Details
         </h1>
         <div className="table">
    <table>
        <tr>
            <th>ID</th>
            <th>Buyer Name</th>
            <th>Address</th>
            {/* <th>Items</th> */}
            <th>Quantity</th>
            <th>Price</th>
            {/* <th>Start</th> */}
            {/* <th>End</th> */}

        </tr>
        <tr>
            <td>1</td>
            <td>Product A</td>
            <td>123 main</td>
            {/* <td>Item 1, Item 2</td> */}
            <td>3</td>
            <td>$100</td>
            {/* <td>22-04-2023</td> */}
            {/* <td>22-04-2023</td> */}
        </tr>
    </table>
    </div>

    <div className='desc'>
        <div className="">
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eum!
        </p>
        </div>
    </div>

    <div className='yourbid'>
        <input className='in' placeholder='Enter your price ' type="text" id="bidAmount"/>
        <button>Bid </button>
    </div>
    </div>
  )
}
