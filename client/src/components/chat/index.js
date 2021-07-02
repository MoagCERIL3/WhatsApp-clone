import React from 'react'
import './styles/chat.css'
import Header from './header/index'
import Content from './content/index'
import Footer from './footer/index'
import axios from '../../axios/axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function Index (props)  {

  const { id } = useParams();
  const [messages,setMessages] = useState([]);
  const [roomName,setRoomName]= useState("");


  useEffect(() => {

    axios.get('/room/'+id)
      .then(res => res.data.map(room =>(
        setRoomName(room.name)
      )
      ));
     
  }, [id])


  useEffect(() => {

    axios.get('/messages/'+id)
      .then(res => { 
        setMessages(res.data);
      });
     
  }, [id])


 
  
    return (
        <div className="chat-section"> 
            <Header room={roomName}/>
            <Content messages={messages}/>
            <Footer/>
        </div>
    )
}

export default Index
