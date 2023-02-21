const express=require('express');
const app=express();

const path=require('path');

var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:"true"}));
//middle ware setting

app.use(express.static(path.join(__dirname,'rereact/build')));

var http=require('http').Server(app);

const port=5000;

// app.get("/",
//     (req, res)=>{
//         res.send('가보자고...');
//     }
// );

app.get('*', (res, req) => {
    req.sendFile(path.join(__dirname, '../build/index.html'));
  });

// app.get("/hmmm",
//     (req, res)=>{
//         res.sendFile(path.join(__dirname, "../build/index.html"));
//     }
// );


  

app.use(express.json());
const cors = require('cors');
app.use(cors());

http.listen(port, ()=>{
    console.log('lets go...');
})
// ./src/server.js