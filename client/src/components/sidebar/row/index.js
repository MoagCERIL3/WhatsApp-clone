import React,{useState, useEffect} from 'react'
import './styles/row.css'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from '../../../axios/axios'


const Index = (props) => {

    const [recentMessage,setRecentMessage]= useState("");

    useEffect(() => {
        axios.get('/room/recentMessage/'+props.id)
          .then(res => { 
            setRecentMessage(res.data[0]?.message);
          });
         
      }, [props.id])

    return (
        
            <Link to={'/rooms/'+props.id}>
                <div className="sidebar-row">
                    <Avatar key={props.id}/>
                    <div className="sidebar-row-content">
                        <h2>{props.name}</h2>
                        <p>{recentMessage}</p>  
                    </div>
                </div>
            </Link>      
        
    )
}

export default Index
