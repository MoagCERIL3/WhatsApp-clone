import React from 'react'
import { useContextValue } from '../../../context/context'
import './styles/content.css'

const Index = (props) => {

    const [{user}] = useContextValue();
    return (
        <div className="chat-section-content">

            {props.messages.map((msg)=>{
                if(msg.author === user?.uid){
                    return ( 
                        <div>
                            <p key={msg._id} className="chat-message-outgoing">
                                <span>{msg.message}</span>
                            </p>
                        </div>
                        
                   )
                }else{
                    console.log(msg.author+'---'+user?.uid);
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
