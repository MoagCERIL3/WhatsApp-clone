import React,{useEffect, useState} from 'react'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from '@material-ui/core'
import './styles/header.css'
import axios from '../../../axios/axios'
import { useContextValue } from '../../../context/context';

function Index() {

    const [{user},dispatch] = useContextValue();
    
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
            <Avatar src={user?.photoURL}/>
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
