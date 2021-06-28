import React from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core'
import './styles/header.css'
const index = () => {
    return (
        <div className="sidebar-header">
            <Avatar/>
            <div className="sidebar-header-right">
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
           
        </div>
    )
}

export default index
