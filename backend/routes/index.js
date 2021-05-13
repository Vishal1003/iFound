const express = require("express");
const controller = require("../controllers/index");
const requireAuth = require("../middlewares/auth");
const router = express.Router();

const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.get("/posts", controller.getAllPosts);

router.post(
  "/posts",
  requireAuth,
  uploadOptions.single("image"),
  controller.createPost
);

router.get("/posts/:id", controller.getOnePost);

router.delete("/posts/:id", requireAuth, controller.deletePost);

router.patch(
  "/posts/:id",
  requireAuth,
  uploadOptions.single("image"),
  controller.updatePost
);

router.get("/users/:id", controller.getUser);

module.exports = router;
