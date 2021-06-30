import React,{useEffect, useState} from 'react'
import SidebarHeader from './header/index'
import SearchBar from './searchBar/index'
import Row from './row/index'
import './styles/sidebar.css'
import axios from '../../axios/axios'
import Pusher from 'pusher-js'

function Index(){

    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        axios.get('/rooms')
            .then(res => { 
                setRooms(res.data);
                
            });
       
    }, [])

    useEffect(() => {

        const pusher = new Pusher('6f676c4e9917edf6e3e4', {
          cluster: 'eu'
        });
      
        const channel = pusher.subscribe('rooms');
        channel.bind('inserted', function(newRoom) {
            setRooms([...rooms,newRoom])
        });
        
        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        }
      }, [rooms])

   
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
