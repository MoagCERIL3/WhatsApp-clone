import './App.css';
import Sidebar from './components/sidebar/index'
import Chat from './components/chat/index'
import {useEffect, useState} from 'react'
import Pusher from 'pusher-js'
import axios from './axios/axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/index'

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

  const [rooms,setRooms] = useState([]);

    useEffect(() => {
        axios.get('/rooms')
            .then(res => { 
                setRooms(res.data);
                
            });
       
    }, [])

    useEffect(() => {

        const pusherRooms = new Pusher('6f676c4e9917edf6e3e4', {
          cluster: 'eu'
        });
      
        const channelRooms = pusherRooms.subscribe('messages');
        channelRooms.bind('inserted', function(newRoom) {
            console.log(newRoom);
            setRooms([...rooms,newRoom]);
        });
        
        return () => {
          channelRooms.unbind_all();
          channelRooms.unsubscribe();
        }
      }, [rooms])


 
      const [user,setUser] = useState(null);


  return (
    <div className="app">
       {!user ? (
          <Login />
        ) : (
       <div className="app-body"> 
            <Router>
            <Sidebar rooms={rooms}/>
              <Switch>

                <Route path='/rooms/:id'>
                  <Chat messages={messages}/>
                </Route>
                <Route path='/'>
                  
                </Route>

              </Switch>
            </Router>
            
        </div>  
      )} 
    </div>
  );
}

export default App;
