import React from 'react'
import '../css/left.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Left() {
    return (
        <div className="left">
            <div className="left-content">
                <div>
                    <Carousel className="carousel">
                        <div>
                            <img width="100%" height="30%" src={require("../assests/image-1.png")} />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img width="100%" height="30%" src={require("../assests/image-2.jpg")} />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img width="100%" height="30%" src={require("../assests/image-3.jpg")} />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
