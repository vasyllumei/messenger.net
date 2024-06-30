import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import {getUserProfile} from "../controllers/users/getUserProfile.js";
import {getSuggestedUsers} from "../controllers/users/getSuggestedUsers.js";
import {signup} from "../controllers/users/signup.js";
import {login} from "../controllers/users/login.js";
import {logout} from "../controllers/users/logout.js";
import {followUnFollowUser} from "../controllers/users/followUnFollowUser.js";
import {updateUser} from "../controllers/users/updateUser.js";
import {disableAccount} from "../controllers/users/disableAccount.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.get("/suggested", authMiddleware, getSuggestedUsers);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/follow/:id", authMiddleware, followUnFollowUser);
router.put("/update/:id", authMiddleware, updateUser);
router.put("/disable", authMiddleware, disableAccount);

export default router;
