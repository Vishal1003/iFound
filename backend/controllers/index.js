const Post = require("../models/Post");
const User = require("../models/User");
const cloudinary = require("../utils/cloudinary");

exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.find({});
  if (!posts)
    return res.json({ success: false, error_id: 1, msg: "No Posts Found!" });
  return res.json({ success: true, posts });
};

exports.getOnePost = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post)
    return res.json({ success: false, error_id: 1, msg: "No post found!" });
  return res.json({ success: true, post });
};

exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id).select("-password");
  if (!user)
    return res.json({ success: false, error_id: 1, msg: "No user found" });
  return res.json({ success: true, user });
};

exports.createPost = async (req, res, next) => {
  const { title, description } = req.body;
  const user = req.user;
  console.log(user);
  const createdOn = Date.now();

  const file = req.file;
  if (!file) {
    return res.json({
      success: false,
      error_id: 1,
      message: "No image file found",
    });
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
    return res.json({
      success: false,
      error_id: 1,
      msg: "Oops! Something went wrong",
    });
  return res.json({ success: true, post });
};

exports.updatePost = async (req, res, next) => {
  const { title, description } = req.body;

  console.log(title);

  const postId = req.params.id;
  const user = req.user;
  console.log(user);

  const oldPost = await Post.findById(postId);
  if (!oldPost)
    return res.json({ success: false, error_id: 1, msg: "Post Not Found!" });

  const createdOn = oldPost.createdOn;

  let file = req.file;
  let imageUrl = null;
  let cloudinary_id = null;

  if (file) {
    await cloudinary.uploader.destroy(oldPost.cloudinary_id);
    let result = await cloudinary.uploader.upload(file.path);
    imageUrl = result.secure_url;
    cloudinary_id = result.cloudinary_id;
  } else {
    imageUrl = oldPost.imageUrl;
    cloudinary_id = oldPost.cloudinary_id;
  }

  let updates = {
    title,
    description,
    postedBy: user.userId,
    createdOn,
    imageUrl,
    cloudinary_id,
  };

  let post = await Post.findByIdAndUpdate(
    postId,
    { $set: updates },
    { new: true }
  );

  if (!post)
    return res.json({
      success: false,
      error_id: 1,
      msg: "Oops! Something went wrong",
    });
  return res.json({ success: true, msg: "Post Updated Successfully!", post });
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  await cloudinary.uploader.destroy(post.cloudinary_id);
  let deletedPost = await Post.findByIdAndDelete(postId);
  if (deletedPost) {
    return res.json({
      success: true,
      message: "Post deleted successfully",
      deletedPost,
    });
  } else {
    return res.json({ success: false, error_id: 1, message: "Post Not Found" });
  }
};
