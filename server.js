const express=require('express');
const app=express();
const path=require('path');
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:"true"}));
//middle ware setting

var http=require('http').Server(app);

const port=3000;

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'));
//   });
app.use("/DDalgiDanguenGame", express.static(__dirname + '/build'));
app.get("/",
    (req, res)=>{
        res.sendFile(path.join(__dirname, "/build/index.html"));
    }
);





// app.use(express.json());
// const cors = require('cors');
// app.use(cors());

http.listen(port, ()=>{
    console.log('lets go...');
})
// ./src/server.js