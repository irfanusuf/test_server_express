const express = require("express")    // import a module from node modules
const connectDb = require("./config/connectDb")    //importing a module from another file
const {loginHandler , registerHandler} = require("./controllers/userController") 

const port = 5000 
const server = express()
//middle wares
connectDb()



//get Routes 
server.get('/' , (req,res)=>{res.send("hello world ")})
server.get('/home' , (req,res)=>{res.send("this is home ")})

//post routes 
server.post('/register' , registerHandler )
server.post('/login' , loginHandler )

// server
server.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`)
})
