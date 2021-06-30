import './App.css';
import Sidebar from './components/sidebar/index'
import Chat from './components/chat/index'
import {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import axios from './axios/axios'

function App() {

  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages')
      .then(res => { 
        setMessages(res.data);
      });
     
  }, [])

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


  console.log(messages);

  return (
    <div className="app">
      <div className="app-body"> 
        <Sidebar />
        <Chat messages={messages}/>
      </div>   
    </div>
  );
}

export default App;
