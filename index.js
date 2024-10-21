const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const port = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());






app.get("/" ,(req,res)=>{

  res.sendFile(path.join(__dirname , "client" , "build" , "index.html"))

})
  









app.listen(port, () => console.log(`Server running on port ${port}`));
