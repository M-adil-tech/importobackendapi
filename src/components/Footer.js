import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className="container-fluid">
            <div className="row footer-sec">
                <div className="col-lg-5 col-md-5 col-sm-6 left-icon-details">
                    <div className="rightlook-logo">
                        <a href="#">
                            <img src="logomain.png" alt=""/>
                        </a>
                    </div>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Tenetur laborum consectetur, alias soluta autem sequi quae repellendus eligendi fugiat ut,
                        officiis molestiae quos iusto facilis pariatur, quasi eveniet. Tempore similique nihil at quis quibusdam?
                    </p>
                    <ul className="social-link">
                        <li>
                            <a href="#">
                                <img src="fb-logo.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="twitter-logo.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="yt-logo.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div className="col-lg-2 col-md-2 col-sm-6 mid-product-list">
                    <ul className="productlist">
                        <h3>Products</h3>
                        <li> <a href="#">roller blinds</a></li>
                        <li> <a href="#">vision shade</a></li>
                        <li> <a href="#">Plantation shutters </a></li>
                        <li> <a href="#">Panel Blinds</a></li>
                        <li> <a href="#">Allusion Blinds</a></li>
                    </ul>
                </div> */}
                {/* <div className="col-lg-2 col-md-2 col-sm-6 mid-product-list">
                    <ul className="productlist">
                        <h3>services</h3>
                        <li> <a href="#">VERTICAL Blinds </a></li>
                        <li> <a href="#">URBAN SHUTTERS</a></li>
                        <li> <a href="#">Honeycomb</a></li>
                        <li> <a href="#">CELLULAR BLINDS</a></li>
                    </ul>
                </div> */}
                <div className="col-lg-3 col-md-3 col-sm-6 mid-product-list
                    quick-link-list ">
                    <ul className="productlist ">
                        <h3>quick link</h3>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/Aboutus" >about</Link></li>
                        {/* <li><a href="#" >products</a></li>
                        <li><a href="#" >contact us</a></li>
                        <li><a href="#" >become a buyer</a></li> */}
                    </ul>
                </div>
                <hr/>
                <div className="copyright">
                    <p>© 2023 • All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </>
  )
}
