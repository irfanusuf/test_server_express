const mongoose = require("mongoose");
const url  = "mongodb://localhost:27017"


const connectDb =  () => {
  try {
    const connect =  mongoose.connect(url);
    if(connect) {
      console.log(`mongo  db connected on community server ${url}`);
    }
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
