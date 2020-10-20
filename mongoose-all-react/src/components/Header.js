import React from 'react'
import '../css/header.css'
import { Avatar, IconButton } from '@material-ui/core'
import { ArrowDropDown, Favorite, Menu, Notifications, Search, ShoppingCart } from '@material-ui/icons'

export default function Header() {
    return (
        <div className="header">
            <div className="site-logo">
                <img src={require('../assests/topic.png')} />
            </div>
            <div className="search-container">
                <IconButton className="search-btn">
                    <ArrowDropDown />
                </IconButton>
                <input placeholder="Search Anything here..." type="text" className="search" />
                <IconButton className="search-btn">
                    <Search />
                </IconButton>
            </div>
        </div>
    )
}
