import React,{useState,useEffect} from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import { IconButton} from  '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic';
import './styles/footer.css'




function Index() {

    const [input,setInput] = useState('');

    const sendMessage = (e) => {

        e.preventDefault();
        console.log("msg",input);
        setInput("");
    }
    return (
        <div className="chat-footer">
            <IconButton>
                 <InsertEmoticonIcon/>
            </IconButton>
            <IconButton>
                <AttachmentOutlinedIcon/>
            </IconButton>
            <form>
                <input placeholder="Type a message" type="text" 
                    value={input} 
                    onChange={e=> setInput(e.target.value)}/>

                <IconButton type="submit" onClick={sendMessage}>
                    <SendIcon/> 
                </IconButton>

            </form>
            <IconButton>
                <MicIcon/>
            </IconButton>
        </div>
    )
}

export default Index
