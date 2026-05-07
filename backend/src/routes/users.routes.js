// import {Router} from "express";

// const router = Router();

// router.route("/login")
// router.route("/register")
// router.route("/add_to_activity")
// router.route("/get_all_activity")

// export default router;

import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";

const router = Router();

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

// Add activity (when you implement controller)
router.post("/add_to_activity", (req, res) => {
  res.json({ message: "add_to_activity not implemented yet" });
});

// Get all activity (when you implement controller)
router.get("/get_all_activity", (req, res) => {
  res.json({ message: "get_all_activity not implemented yet" });
});

export default router;
