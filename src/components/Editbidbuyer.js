import React from 'react'
import "./Editbidbuyer.css"
import { Link } from 'react-router-dom';

export default function Editbidbuyer() {
  return (

    <div className='flexing'>
    <div className='outerdash' >
        <div className="dashboard">
        <div className="option" >
            <Link to="/Mainbuyer"> <button>  Home </button></Link>
        </div>
          <div className="option" >
              <Link to="/Bidcreatebybuyer"> <button>  Create Bid </button></Link>
          </div>
          <div className="option">
              <Link to="/Buyercurrentbids"> <button>Current Bids</button></Link>
          </div>
          <div className="option">
              <Link to="/Buyerprofile"> <button> Manage Profile </button></Link>
          </div>
      </div>
    </div>
    
    <div className="managebid">
    <h2 className="heading">
        Edit Bid
    </h2>

      <form className="bidForm" action="" >
        <div className="bidreq">
            {/* <label for="Date"> Start Date </label>
                 <input type="date" className="date require" name="userId" required placeholder='DATE' />

            <label for="Date"> End Date </label>
                <input type="date" className="date require" name="userId" required placeholder='DATE' />

            <label for="bidId">Bid Id</label>
                <input type="text" className="bidId require" name="bidId" required placeholder='Bid ID'/> */}

            <label for="location">Location</label>
                <input type="text" className="location require" name="location" required placeholder='Location'/>

            <label for="category">Category</label>
                <input type="text" className="category require" name="category" required placeholder='category'/>


            <label for="price">Price</label>
                <input type="number" className="price require" name="price" required placeholder='Price'/>

            <label for="quantity">Quantity</label>
                <input type="number" className="quantity require" name="quantity" required placeholder='Quantity'/>

            <label for="description">Description</label>
                <textarea className="description require" name="description" rows="4" required placeholder='Description'></textarea>

                <input type="submit" value="Update"/>

    </div>
</form>
</div>
</div>
  )
}
