import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
//second argument is a callback function which we save in controllers

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
