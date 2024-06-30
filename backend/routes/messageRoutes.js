import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {getConversations} from "../controllers/messages/getConversations.js";
import {getMessages} from "../controllers/messages/getMessages.js";
import {sendMessage} from "../controllers/messages/sendMessage.js";

const router = express.Router();

router.get("/conversations", authMiddleware, getConversations);
router.get("/:otherUserId", authMiddleware, getMessages);
router.post("/", authMiddleware, sendMessage);

export default router;
