const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;
const Messages = require('./models/messages')
const Rooms = require('./models/rooms')
const Pusher = require("pusher");

// Database
const url ='mongodb+srv://root:root@cluster0.osdlf.mongodb.net/whatsAppDb?retryWrites=true&w=majority';
mongoose.connect(url,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection
db.on('error',(error)=> console.log(error))
db.once('open',()=>{

    console.log('Connected to Database ...');

    // messages
    const collection = db.collection('messages');
    const changeStream = collection.watch();

    changeStream.on("change", (change)=>{
        console.log("A change has occured", change);

        if(change.operationType =="insert"){

            const messageDetails = change.fullDocument;
            pusher.trigger("messages","inserted",{
                message: messageDetails.message
            });

        }else{
            console.log('Error triggering Pusher')
        }
    })

    // Rooms
    const roomsCollection = db.collection('rooms');
    const changeStreamRooms = roomsCollection.watch();

    changeStreamRooms.on("change", (change)=>{
        console.log("A change has occured", change);

        if(change.operationType =="insert"){

            const roomsDetails = change.fullDocument;
            pusher.trigger("messages","inserted",{
                name: roomsDetails.name
            });

        }else{
            console.log('Error triggering Pusher')
        }
    })

});

// Middleware

app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next();
});

// Pusher

const pusher = new Pusher({
    appId: "1227113",
    key: "6f676c4e9917edf6e3e4",
    secret: "b1621556f1e31138e743",
    cluster: "eu",
    useTLS: true
  });


// Routes

app.get('/messages/:room', (req,res)=>{
    
    Messages.find({ room: req.params.room},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});

app.get('/messages', (req,res)=>{
    
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});


app.post('/messages/new', (req,res)=>{
    
    const message= req.body;

    Messages.create(message ,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

app.post('/rooms/new', (req,res)=>{
    
    const room= req.body;

    Rooms.create(room ,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

app.get('/rooms', (req,res)=>{
    
    Rooms.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});

app.get('/room/:id', (req,res)=>{
    
    Rooms.find({ _id: req.params.id},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});

app.get('/room/recentMessage/:id', (req,res)=>{
    
    Messages.find({ room: req.params.id}).sort({'timestamp':'desc'}).exec((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});









// Listnener
app.listen(PORT,() => {
    console.log("running on port",PORT );
})
