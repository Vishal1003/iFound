const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// User Login route
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (!user)
    return res.json({
      success: false,
      msg: "That email id is not registered!",
    });

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      { userId: user._id, admin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    return res.json({
      success: true,
      msg: "User LoggedIn Successfully!",
      user,
      token,
    });
  } else return res.json({ success: false, msg: "Wrong Credentials!" });
};

// User Register route
exports.postRegister = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res.json({
        success: false,
        msg: "User already registered with that emailId",
      });

    const hashPassword = await bcrypt.hash(password, 8);
    user = await new User({
      name,
      email,
      password: hashPassword,
    });

    user = await user.save();

    if (!user)
      return res.json({ success: false, msg: "Oops! Something went wrong!" });

    res.json({ success: true, msg: "User registered successfully!", user });
  } catch (e) {
    console.log(e);
  }
};
