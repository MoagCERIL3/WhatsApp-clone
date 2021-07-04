import React from 'react'
import { useContextValue } from '../../../context/context'
import './styles/content.css'

const Index = (props) => {

    const [{user}] = useContextValue();
    return (
        <div className="chat-section-content">

            {props.messages.map((msg)=>{
                if(msg.author === user?.displayName){
                    return ( 
                        <div>
                            <p key={msg._id} className="chat-message-outgoing">
                                <span>{msg.message}</span>
                            </p>
                        </div>
                        
                   )
                }else{
                    return ( 
                        <p key={msg._id} className="chat-message-incoming">
                            <span>{msg.message}</span>
                        </p>
                   )
                }
               
            })}
           
           
           
        </div>
    )
}

export default Index
