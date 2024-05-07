const User = require("../models/userModel");

const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username !== "" && email !== "" && password !== "") {

      const isUser = await User.findOne({email})

      if(isUser){
        return res.json({ message: "User Already exists!" });
      }

      const user = await new User({ username, email, password });
      const save = await user.save();

      if (save) {
        res.json({ message: "User registered Succesfully!" });
       
      } else {
        res.json({ message: "Some Error with Server" });
      }
    } else {
      res.json({ message: "All Credentials Required!" });
    }
  } catch (error) {
    res.json({ message: "Server Error " });
    console.log(error);
  }
};

const loginHandler = async (req, res) => {
  res.send("hello");
};

module.exports = { loginHandler, registerHandler };
