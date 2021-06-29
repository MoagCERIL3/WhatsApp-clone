const express = require('express')
const router = express.Router()
const Messages = require('../models/messages.js')

router.get('/messages/new', (req,res)=>{
    
    const message= req.body;

    Messages.create(message ,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
