const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require("../utils/cloudinary");

exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.find({});
  if (!posts) return res.json({ success: false, msg: "No Posts Found!" });
  return res.json({ success: true, posts });
};

exports.getOnePost = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById({ _id: id });
  if (!post) return res.json({ success: false, msg: "No post found!" });
  return res.json({ success: true, post });
};

exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id }).select("-password");
  if (!user) return res.json({ success: false, msg: "No user found" });
  return res.json({ success: true, user });
};

exports.createPost = async (req, res, next) => {
  const { title, description } = req.body;
  const user = req.user;
  console.log(user);
  const createdOn = Date.now();

  const file = req.file;
  if (!file) {
    return res.json({ success: false, message: "No image file found" });
  }
  const result = await cloudinary.uploader.upload(file.path);

  let post = new Post({
    title,
    description,
    postedBy: user.userId,
    createdOn,
    imageUrl: result.secure_url,
    cloudinary_id: result.public_id,
  });

  post = await post.save();

  if (!post)
    return res.json({ success: false, msg: "Oops! Something went wrong" });
  return res.json({ success: true, post });
};
