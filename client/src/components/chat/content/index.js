import React from 'react'
import './styles/content.css'

const index = (props) => {
    return (
        <div className="chat-section-content">

            {props.messages.map((msg)=>{
                if(msg.author === "mouad"){
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

export default index
