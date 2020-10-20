import React from 'react'
import '../css/left.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from './Header';
import Home from './Home';

export default function Left() {
    return (
        <div className="left">
            <Header />
            <Home />
        </div>
    )
}
