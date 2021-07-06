import React,{useEffect, useState} from 'react'
import SidebarHeader from './header/index'
import SearchBar from './searchBar/index'
import Row from './row/index'
import './styles/sidebar.css'

function Index(props){

    
   
    return (
        <div className="sidebar">
            <SidebarHeader/>
            <SearchBar />

            <div className="sidebar-chatRows">
                {props.rooms.map(singleRoom=>(
                        
                        <Row key={singleRoom._id} name={singleRoom.name} id={singleRoom._id}/>
                ))}
            </div>
            
        </div>
    )
}

export default Index
