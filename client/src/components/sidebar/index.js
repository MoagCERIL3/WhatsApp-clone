import React,{useEffect, useState} from 'react'
import SidebarHeader from './header/index'
import SearchBar from './searchBar/index'
import Row from './row/index'
import './styles/sidebar.css'
import axios from '../../axios/axios'

function Index(){

    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        axios.get('/rooms')
            .then(res => { 
                setRooms(res.data);
                
            });
       
    }, [])

    console.log(rooms)
    return (
        <div className="sidebar">
            <SidebarHeader/>
            <SearchBar />

            <div className="sidebar-chatRows">
                {rooms.map(singleRoom=>(
                        <Row key={singleRoom._id} name={singleRoom.name}
                        />
                ))}
            </div>
            
        </div>
    )
}

export default Index
