const mongoose = require("mongoose");

const uri = "mongodb+srv://irfanusuf33:classy_123@classy-contour.52tbu.mongodb.net/maui?retryWrites=true&w=majority&appName=classy-contour";


const connectDb = async () => {
  try {
   await mongoose.connect(uri);
    console.log(`Database Connected`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
