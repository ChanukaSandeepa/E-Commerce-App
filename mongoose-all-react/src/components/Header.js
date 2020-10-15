import React from 'react'
import '../css/header.css'
import { Avatar, IconButton } from '@material-ui/core'
import { Favorite, Menu, Notifications, ShoppingCart } from '@material-ui/icons'

export default function Header() {
    return (
        <div className="header">
            <div className="profile">
                <IconButton>
                    <Menu className="header_option" />
                </IconButton>
            </div>
            <div className="header_options">
                <IconButton>
                    <Avatar />
                </IconButton>

                <IconButton>
                    <Notifications className="header_option" />
                </IconButton>
                <IconButton>
                    <ShoppingCart className="header_option" />
                </IconButton>
                <IconButton>
                    <Favorite className="header_option" />
                </IconButton>

            </div>
        </div>
    )
}
