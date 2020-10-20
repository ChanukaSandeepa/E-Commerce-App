import React from 'react'
import '../css/home.css'
import Carousel from 'infinite-react-carousel';

export default function Home() {

    const settings = {
        arrows: false,
        autoplay: true,
        duration: 100
    };

    return (
        <div className="left-content">
            <div className="carousel">
                <Carousel style={{ height: '80%' }} {...settings}>
                    <div className="caro">
                        <img height="100%" src={require("../assests/image-1.png")} />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className="caro">
                        <img height="100%" src={require("../assests/image-2.jpg")} />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div className="caro">
                        <img height="100%" src={require("../assests/image-3.jpg")} />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>
            </div>
            <div className="home-category-container">
                <div className="category-field">

                </div>
                <div className="category-field">

                </div>
                <div className="category-field">

                </div>
                <div className="category-field">

                </div>
            </div>
            <div className="discount-container">
                <div className="sales-container">
                    <div className="sales-image">
                        <img src={require('../assests/big-sale.svg')} />
                    </div>
                    <div className="sales-details">
                        <div className="sales-day-count">
                            <h3>Sales End In</h3>
                            <div className="timer">
                                <div> 01 </div>
                                <h4>days</h4>
                                <div>19</div>
                                <h4>:</h4>
                                <div>19</div>
                                <h4>:</h4>
                                <div>19</div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="offer-container">

                </div>
            </div>
        </div>


    )
}
