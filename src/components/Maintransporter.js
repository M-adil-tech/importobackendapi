import React from 'react'
import './Maintransporter.css'
import { Link } from 'react-router-dom';
import { useUser } from "../useUser";
import Dashboardtrans from './Dashboardtrans';

export default function Maintransporter() {

    const { user } = useUser();
  return (

    <div className='flexing-m-t'>
        <div className="forflex">
            {<Dashboardtrans/>}
        </div>


    <div className='viewtransprofile'>
      <header>
        <div className="trans-info">
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
        <section className="trans-stats">
            <h2>transporter Stats</h2>
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


{/* //     <div className='maintrans'>
// <h1 className="welcome">
//         WELCOME TRANSPORTER
//       </h1>
//         <div className="buyeroptions">
//             <div className="bidoptions">
//                 <ul className="bids">
//                     <li className="create"> <Link to="/Transporterprofile"  > <button>  Profile </button></Link> </li>
//                      <li className="manage"><Link to="/Viewbids"  ><button> View bids </button></Link></li>
//                      <li className="manage"><Link to="/Accepttrans"  ><button> Accepted Bids </button></Link></li>
//                 </ul> 
//             </div>
//         </div>
//     </div> */}


  