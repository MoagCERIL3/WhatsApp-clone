import React from 'react'
import './styles/chat.css'
import Header from './header/index'
import Content from './content/index'
import Footer from './footer/index'
import axios from '../../axios/axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useContextValue } from '../../context/context'
import { actionTypes } from '../../context/reducer'
import Pusher from 'pusher-js'


function Index (props)  {

  const { id } = useParams();
  const [messages,setMessages] = useState([]);
  const [roomName,setRoomName]= useState("");
  const [{currentRoom, dispatch}] = useContextValue();


  /*const setRoom = (room) =>{
    dispatch({
      type : actionTypes.SET_ROOM,
      room : room
    });
    console.log(currentRoom);
  }*/
  
  useEffect(() => {

    axios.get('/room/'+id)
      .then(res => res.data.map(room =>(
        setRoomName(room.name)

      )
      ));
    
    // setRoom(id);
  }, [id])


  useEffect(() => {

    axios.get('/messages/'+id)
      .then(res => { 
        setMessages(res.data);
      });
     
  }, [id])

  useEffect(() => {

    const pusher = new Pusher('6f676c4e9917edf6e3e4', {
      cluster: 'eu'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages,newMessage])
    });
    
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

 
  
    return (
        <div className="chat-section"> 
            <Header room={roomName}/>
            <Content messages={messages}/>
            <Footer room={id}/>
        </div>
    )
}

export default Index
