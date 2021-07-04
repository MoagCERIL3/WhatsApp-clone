import React from 'react'
import {Button} from "@material-ui/core"
import './styles/login.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import {auth, provider} from '../../firebase/firebase'
import { useContextValue} from '../../context/context' 
import { actionTypes } from '../../context/reducer';

function Index() {

    const [{},dispatch] = useContextValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            })
        })
        .catch(error=>alert(error.message))
    }

    
    return (
        <div className="login">
            <div className="login-container">
                <img className="login-image" src="https://www.callbell.eu/wp-content/uploads/2019/01/Senza-nome-3.png" alt=""/>
                
                <div className="login-content">
                    <h4>Sign in to WhatsApp</h4>
                </div>

                <Button onClick={signIn}>
                     Google
                </Button>

                <div className="login-footer">
                    <GitHubIcon/> By MoagCERIL3
                </div>
            </div>
            
        </div>
    )
}

export default Index

