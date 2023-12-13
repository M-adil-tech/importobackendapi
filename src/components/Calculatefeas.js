import React from 'react'
import "./Calculatefeas.css"

export default function Calculatefeas() {
  return (
    <div className="feasibility-calculator">
      <h1>Feasibility Calculator</h1>
      <div className="form-container">
        <form className="feasibility-form">
          <div className="form-row">
            <label className='l' htmlFor="bidId">Bid ID:</label>
            <input type="text" className='inp' name="bidId" required />
          </div>
          <div className="form-row">
            <label className='l' htmlFor="importFrom">Import From:</label>
            <input type="text" className='inp' name="importFrom" required />
          </div>
          <div className="form-row">
            <label className='l' htmlFor="exportTo">Export To:</label>
            <input type="text" className='inp' name="exportTo" required />
          </div>

          <button type="button"  >Calculate</button>
        </form>
      </div>
      <div className="result"> </div>
    </div>

  )
}
