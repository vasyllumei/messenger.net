import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {getFeedPosts} from "../controllers/posts/getFeedPosts.js";
import {getUserPosts} from "../controllers/posts/getUserPosts.js";
import {createPost} from "../controllers/posts/createPost.js";
import {getPost} from "../controllers/posts/getPost.js";
import {deletePost} from "../controllers/posts/deletePost.js";
import {likeUnlikePost} from "../controllers/posts/likeUnlikePost.js";
import {replyToPost} from "../controllers/posts/replyToPost.js";

const router = express.Router();

router.get("/feed", authMiddleware, getFeedPosts);
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.post("/create", authMiddleware, createPost);
router.delete("/:id", authMiddleware, deletePost);
router.put("/like/:id", authMiddleware, likeUnlikePost);
router.put("/reply/:id", authMiddleware, replyToPost);

export default router;
