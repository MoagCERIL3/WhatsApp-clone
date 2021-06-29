import React from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import { IconButton} from  '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic';
import './styles/footer.css'


const index = () => {
    return (
        <div className="chat-footer">
            <IconButton>
                 <InsertEmoticonIcon/>
            </IconButton>
            <IconButton>
                <AttachmentOutlinedIcon/>
            </IconButton>
            <form>
                <input placeholder="Type a message" type="text"/>
                <IconButton type="submit">
                    <SendIcon/> 
                </IconButton>

            </form>
            <IconButton>
                <MicIcon/>
            </IconButton>
        </div>
    )
}

export default index
