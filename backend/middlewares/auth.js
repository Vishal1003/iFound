const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token)
    return res.json({ success: false, msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.json({ success: false, msg: "Error occurred!" });
  }
};


module.exports = requireAuth;