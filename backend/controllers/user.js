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
      error_id: 1,
      msg: "That email id is not registered!",
    });

  if (bcrypt.compareSync(password, user.password)) {
    user = await User.findOne({ email }).select("-password");

    if (!user)
      return res.json({
        success: false,
        error_id: 1,
        msg: "Oops! Something went wrong!",
      });

    const token = jwt.sign(
      { id: user._id, admin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      }
    );

    res.json({
      success: true,
      msg: "User LoggedIn successfully!",
      user,
      token,
    });
  } else
    return res.json({ success: false, error_id: 1, msg: "Wrong Credentials!" });
};

// User Register route
exports.postRegister = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res.json({
        success: false,
        error_id: 1,
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
      return res.json({
        success: false,
        error_id: 1,
        msg: "Oops! Something went wrong!",
      });

    user = await User.findOne({ email }).select("-password");

    if (!user)
      return res.json({
        success: false,
        error_id: 1,
        msg: "Oops! Something went wrong!",
      });

    const token = jwt.sign(
      { id: user._id, admin: user.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      }
    );

    res.json({
      success: true,
      msg: "User registered successfully!",
      user,
      token,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getUserData = async (req, res, next) => {
  const data = await User.findById(req.user.id).select("-password");
  if (!data)
    return res.json({ success: false, error_id: 1, msg: "User not found" });
  // console.log(data);
  return res.json({ success: true, user: data });
};
