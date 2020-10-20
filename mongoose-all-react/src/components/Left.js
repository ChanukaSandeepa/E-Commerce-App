import React from 'react'
import '../css/left.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'infinite-react-carousel';
import Header from './Header';

export default function Left() {

    const settings = {
        arrows: false,
        autoplay: true,
        duration: 100
    };

    return (
        <div className="left">
            <Header />
            <div className="left-content">
                <div className="carousel">
                    <Carousel {...settings}>
                        <div>
                            <img src={require("../assests/image-1.png")} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img src={require("../assests/image-2.jpg")} />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img src={require("../assests/image-3.jpg")} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className="">

            </div>
        </div>
    )
}
