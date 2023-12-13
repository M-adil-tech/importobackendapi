import React from 'react'
import "./Acceptseller.css"

export default function Acceptseller() {
  return (
    <div className='acceptseller' >
      <div className='heading'>
        <h1>
        Accepted Bids
        </h1>
      </div>
      <div className="tablediv">
    <table>
        <thead>
            <tr>
                <th>Bid ID</th>
                <th>Date</th>
                <th>Buyer Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>10-9-2023</td>
                <td>Jhon</td>
                <td>
                </td>
            </tr>
            </tbody>
    </table>
    </div>
    </div>
  )
}
