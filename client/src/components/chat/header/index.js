import React from 'react'
import {Avatar, IconButton} from  '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './styles/header.css'

const index = (props) => {
    return (
        <div className="chat-section-header">
            <Avatar/>   
            <div className="chat-section-header-content">
                <h3>{props.room}</h3>
                <span>offline</span>
            </div>
            <div className="chat-section-header-right">
                <IconButton>
                    <SearchOutlinedIcon/> 
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>


        </div>
    )
}

export default index
