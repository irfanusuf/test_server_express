const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (username !== "" && email !== "" && password !== "") {
      const passCrypt = await bcrypt.hash(password, 10);
      const isUser = await User.findOne({ email });

      // true or false
      if (isUser) {
        return res.status(200).json({ message: "User Already exists!" });
      }
      const user = await new User({ username, email, password: passCrypt });
      const save = await user.save();
      if (save) {
        res.status(200).json({ message: "User registered Succesfully!" });
      } else {
        res.status(500).json({ message: "Some Error with Server" });
      }
    } else {
      res.json({ message: "All Credentials Required!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error " });
    console.log(error);
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (email !== "" && password !== "") {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const passVerify = await bcrypt.compare(password, existingUser.password);

      if (passVerify) {
        res.json({ message: "logged in succesfully !" });
      } else {
        res.json({ message: "Incorrect Password" });
      }
    } else {
      res.json({ message: "User Not found!" });
    }
  } else {
    res.json({ message: "All Credentials Required!" });
  }
};

module.exports = { loginHandler, registerHandler };

// const username =  req.body.username
// const email = req.body.email
// const password = req.body.password
