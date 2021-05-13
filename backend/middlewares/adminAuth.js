const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token)
    return res.json({ success: false, msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin)
      return res.json({
        success: false,
        msg: "You are not authorized to access that source!",
      });
    next();
  } catch (e) {
    return res.json({ success: false, msg: "Error occurred!" });
  }
};

module.exports = adminAuth;
