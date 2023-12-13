import React from 'react'
import './Aboutus.css'

export default function Aboutus() {
  return (
    <div className='aboutus'>
        <div className="outer-container">
            <div className="box box1">
                <div class=" upper">
                    <div className="upper-write">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="upper-img">
                        <img class="header-image uper-block" src="/aboutimport.png" alt="Header Image"/>
                    </div>
                </div>
            </div>
            <div className="box box2">
                <div class=" benefits">
                    <div className="benefit-write">
                        <h2>Benefits</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis aliquet velit. quis eleifend tortor nisl et neque.</p>
                    </div>
                    <div className="benefit-img">
                        <img class="header-image uper-block" src="/world-benefit.jpg" alt="Header Image"/>
                    </div>
        
                </div>
            </div>
            <div className="box box3">
                <div class="container inside-img">
                    <div className="inner img">
                        <img  src="/world-map.jpg" alt="Main Image"/>
                    </div>
                    <div className="inner content">
                        <h1>Build your network</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nunc commodo dapibus. Nulla facilisi.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
