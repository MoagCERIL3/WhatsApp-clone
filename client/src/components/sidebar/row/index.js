import React from 'react'
import './styles/row.css'
import {Avatar} from '@material-ui/core'


const index = (props) => {
    return (
        <div className="sidebar-row">
            <Avatar />
            <div className="sidebar-row-content">
                <h2>{props.name}</h2>
                <p>this is the recent message in the chat</p>  
            </div>
                      
        </div>
    )
}

export default index
