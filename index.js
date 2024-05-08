const express = require("express")    // import a module from node modules
const connectDb = require("./config/connectDb")    //importing a module from another file
const {loginHandler , registerHandler} = require("./controllers/userController") 

const port = 5000 
const server = express()   // 
//middle wares






server.use(express.json())   // used for parsing the json data coming from body 


connectDb()



//get Routes 
server.get('/' , (req,res)=>{res.send("hello world /hello hello ")})
server.get('/home' , (req,res)=>{res.send("this is home ")})

//post routes 
server.post('/register' , registerHandler )
server.post('/login' , loginHandler )

// server
server.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`)
})
