const express = require("express");
const controller = require("../controllers/user");
const requireAuth = require("../middlewares/auth");
const router = express.Router();

// POST login user as a vendor or non-vendor
router.post("/login", controller.postLogin);

// POST register user as a vendor or non-vendor
router.post("/register", controller.postRegister);

// GET user data
router.get("/getUser", requireAuth, controller.getUserData);

module.exports = router;
