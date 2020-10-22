import { Avatar, IconButton } from '@material-ui/core'
import { Favorite, Notifications, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import '../css/right.css'

export default function Right() {
    return (
        <div className="right">
            <div className="right-content">
                <div className="side-header">
                    <div className="side-profile">
                        <IconButton>
                            <Avatar />
                        </IconButton>
                    </div>

                    <div className="side-options">
                        <IconButton className="icon-button">
                            <Notifications className="side_header_option" />
                        </IconButton>
                        <IconButton className="icon-button">
                            <ShoppingCart className="side_header_option" />
                        </IconButton>
                        <IconButton className="icon-button">
                            <Favorite className="side_header_option" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
