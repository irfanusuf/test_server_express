const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { registerHandler, loginHandler } = require('./controllers/userController');
const connectDb = require('./config/connectDb');
const port = 5000;


const app = express();



app.use(cors());
app.use(bodyParser.json());

connectDb()

app.use(express.static(path.join(__dirname , "client" , "build" , "static")))


app.get("*" ,(req,res)=>{
  res.sendFile(path.join(__dirname , "client" , "build" , "index.html"))
})
  


// api routes

app.post("/api/v1/user/register" , registerHandler)
app.post("/api/v1/user/login" , loginHandler)



app.listen(port, () => console.log(`Server running on port ${port}`));
