import React from 'react'
import "./Buyerprebids.css"

export default function Buyerprebids() {
  return (
    <div className='buyerprebids'>
    <div className='viewbids'>
         <h1>Bid Information</h1>
    </div>
     <div className="tablediv">
     <table>
         <thead>
             <tr>
                 <th>Bid ID</th>
                 <th>Buyer Name</th>
                 <th>Buyer Address</th>
             </tr>
         </thead>
         <tbody>
             <tr onclick="selectBid">
                 <td>1</td>
                 <td>John Doe</td>
                 <td>123 Main St</td>
             </tr>
             {/* {bids.map((bid) => (
            <tr key={bid.id} onClick={() => selectBid(bid)}>
              <td>{bid.id}</td>
              <td>{bid.buyerName}</td>
              <td>{bid.buyerAddress}</td> */}
            </tbody>
    </table>
    </div>
    </div>
  )
}
