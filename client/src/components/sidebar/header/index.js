import React,{useEffect, useState} from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core'
import './styles/header.css'
import axios from '../../../axios/axios'


function Index() {

    const newChat = async (e) => {

        e.preventDefault();

        const newRoom = prompt("Add new Room") ;

        if (newRoom){
            await axios.post('/rooms/new',{
                name: newRoom
            })
        }
            
           

    }
    return (
        <div className="sidebar-header">
            <Avatar/>
            <div className="sidebar-header-right">
                <IconButton onClick={newChat}>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
           
        </div>
    )
}

export default Index
