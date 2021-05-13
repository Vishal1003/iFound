const express = require("express");
const controller = require("../controllers/user");
const router = express.Router();

// POST login user as a vendor or non-vendor
router.post("/login", controller.postLogin);

// POST register user as a vendor or non-vendor
router.post("/register", controller.postRegister);

module.exports = router;
