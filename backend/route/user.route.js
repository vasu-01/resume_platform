import { Router } from "express";
import { userSignup, userLogin } from "../controller/user.controller.js";

const router = Router();

router.route("/signup").post(userSignup);
router.route("/").post(userLogin);

export default router;
