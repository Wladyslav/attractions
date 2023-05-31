import Link from 'next/link';
import React from 'react'

const HeaderOne = () => {
  return (
    <React.Fragment>
    <header className="stick style1 w-100 d-flex flex-wrap justify-content-between align-items-center">
                <div className="logo"><h1 className="mb-0"><a href="index.html" title="Home"><img className="img-fluid" src="assets/images/logo.png" alt="Logo" srcset="assets/images/retina-logo.png"/></a></h1></div>
                <div className="menu-wrap">
                    <span className="d-block">Your Location: Sanfrancisco, CA <a className="thm-clr" href="javascript:void(0);" title=""><i className="fas fa-map-marker-alt"></i>Change location</a></span>
                    <nav className="d-inline-flex align-items-center">
                        <div>
                            <ul className="mb-0 list-unstyled d-inline-flex">
                                <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Home</a>
                                    <ul className="children mb-0 list-unstyled">
                                        <li><a href="index.html" title="">Homepage 1</a></li>
                                        <li><a href="index2.html" title="">Homepage 2</a></li>
                                        <li><a href="index3.html" title="">Homepage 3</a></li>
                                        <li><a href="index4.html" title="">Homepage 4</a></li>
                                        <li><a href="index5.html" title="">Homepage 5</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Listing</a>
                                    <ul className="children mb-0 list-unstyled">
                                        <li><a href="place-listing.html" title="">Place Listing</a></li>
                                        <li><a href="listing-explore-map-sidebar.html" title="">Listing With Map Style 1</a></li>
                                        <li><a href="place-layout-detail.html" title="">Listing Detail Style 1</a></li>
                                        <li><a href="listing-explore-map-sidebar2.html" title="">Listing With Map Style 2</a></li>
                                        <li><a href="place-layout-detail2.html" title="">Listing Detail Style 2</a></li>
                                        <li><a href="add-listing.html" title="">Add Listing</a></li>
                                        <li><a href="listing-review.html" title="">Listing Review</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Pages</a>
                                    <div className="megamenu center">
                                        <div className="row align-items-center">
                                            <div className="col-md-4 col-sm-12 col-sm-4">
                                                <div className="megamenu-links w-100">
                                                    <a href="listing-layout.html" title="">Listing Style 1</a>
                                                    <a href="listing-layout2.html" title="">Listing Style 2</a>
                                                    <a href="event-detail.html" title="">Event Detail Style 1</a>
                                                    <a href="event-detail2.html" title="">Event Detail Style 2</a>
                                                    <a href="price-table.html" title="">Price Table</a>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-sm-4">
                                                <div className="megamenu-links w-100">
                                                    <a href="gallery.html" title="">Gallery Style 1</a>
                                                    <a href="gallery2.html" title="">Gallery Style 2</a>
                                                    <a href="gallery3.html" title="">Gallery Style 3</a>
                                                    <a href="gallery-detail.html" title="">Gallery Detail</a>
                                                    <a href="login.html" title="">Login</a>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-sm-4">
                                                <div className="megamenu-add w-100">
                                                    <img className="img-fluid" src="assets/images/resources/megamenu-img.jpg" alt="Megamenu Image"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="about.html" title="">About us</a></li>
                                <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Contact us</a>
                                    <ul className="children mb-0 list-unstyled">
                                        <li><a href="contact.html" title="">Contact us 1</a></li>
                                        <li><a href="contact2.html" title="">Contact us 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <a className="login-btn" href="login.html" title=""><i className="thm-clr fas fa-user"></i>login or Register</a>
                    </nav>
                </div>
            </header>
            <div className="rspn-hdr">
                <div className="rspn-mdbr">
                    <div className="rspn-scil">
                        <a href="javascript:void(0);" title="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="javascript:void(0);" title="Google Plus" target="_blank"><i className="fab fa-google-plus-g"></i></a>
                        <a href="javascript:void(0);" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="javascript:void(0);" title="Linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <form className="rspn-srch">
                        <input type="text" placeholder="Enter Your Keyword" />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="lg-mn">
                    <div className="logo"><a href="index.html" title="Home"><img src="assets/images/logo2.png" alt="Logo" srcset="assets/images/retina-logo2.png"/></a></div>
                    <span className="rspn-mnu-btn"><i className="fa fa-list-ul"></i></span>
                </div>
                <div className="rsnp-mnu">
                    <span className="rspn-mnu-cls"><i className="fa fa-times"></i></span>
                    <ul className="mb-0 list-unstyled w-100">
                        <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Home</a>
                            <ul className="children mb-0 list-unstyled">
                                <li><a href="index.html" title="">Homepage 1</a></li>
                                <li><a href="index2.html" title="">Homepage 2</a></li>
                                <li><a href="index3.html" title="">Homepage 3</a></li>
                                <li><a href="index4.html" title="">Homepage 4</a></li>
                                <li><a href="index5.html" title="">Homepage 5</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Listing</a>
                            <ul className="children mb-0 list-unstyled">
                                <li><a href="place-listing.html" title="">Place Listing</a></li>
                                <li><a href="listing-explore-map-sidebar.html" title="">Listing With Map Style 1</a></li>
                                <li><a href="place-layout-detail.html" title="">Listing Detail Style 1</a></li>
                                <li><a href="listing-explore-map-sidebar2.html" title="">Listing With Map Style 2</a></li>
                                <li><a href="place-layout-detail2.html" title="">Listing Detail Style 2</a></li>
                                <li><a href="add-listing.html" title="">Add Listing</a></li>
                                <li><a href="listing-review.html" title="">Listing Review</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Pages</a>
                            <ul className="children mb-0 list-unstyled">
                                <li><a href="listing-layout.html" title="">Listing Style 1</a></li>
                                <li><a href="listing-layout2.html" title="">Listing Style 2</a></li>
                                <li><a href="event-detail.html" title="">Event Detail Style 1</a></li>
                                <li><a href="event-detail2.html" title="">Event Detail Style 2</a></li>
                                <li><a href="price-table.html" title="">Price Table</a></li>
                                <li><a href="gallery.html" title="">Gallery Style 1</a></li>
                                <li><a href="gallery2.html" title="">Gallery Style 2</a></li>
                                <li><a href="gallery3.html" title="">Gallery Style 3</a></li>
                                <li><a href="gallery-detail.html" title="">Gallery Detail</a></li>
                                <li><a href="login.html" title="">Login</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html" title="">About us</a></li>
                        <li className="menu-item-has-children"><a href="javascript:void(0);" title="">Contact us</a>
                            <ul className="children mb-0 list-unstyled">
                                <li><a href="contact.html" title="">Contact us 1</a></li>
                                <li><a href="contact2.html" title="">Contact us 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="subscribe-popup-wrap w-100 text-center position-fixed h-100">
                <div className="subscribe-popup-inner d-block overflow-hidden brd-rd20">
                    <div className="subscribe-popup-iner w-100 brd-rd20 overflow-hidden" >
                        <span className="popup-cls-btn rounded-circle"><i className="fa fa-times"></i></span>
                        <div className="popup-title w-100">
                            <h2 className="mb-0">Subscribe get notified!</h2>
                            <p className="mb-0">Garcia, a versatil web designer. Phasellus vehicula the justo eg diam in posuere phasellus eget sem</p>
                        </div>
                        <form className="w-100 position-relative">
                            {/* <input type="email" placeholder="Subscribe your email"> */}
                            <button type="submit"><i className="far fa-envelope"></i></button>
                        </form>
                        <i>Service</i>
                    </div>
                    <div className="subscribe-popup-bottom text-left w-100" >
                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <div className="social-links2 d-inline-block">
                                    <a href="javascript:void(0);" title="Facebook" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="javascript:void(0);" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
                                    <a href="javascript:void(0);" title="Linkedin" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="javascript:void(0);" title="Behance" target="_blank"><i className="fab fa-behance"></i></a>
                                    <a href="javascript:void(0);" title="Pinterest" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="javascript:void(0);" title="Instagram" target="_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <span className="emailinfo w-100 d-block">
                                    <i className="far fa-envelope"></i>
                                    <a href="javascript:void(0);" title="">info@email.com</a>
                                    <span className="d-block">online support</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
  )
}

export default HeaderOne


