import express from "express";
import { deleteUser, getAllUsers, getUser, registerUser, updateUser } from "../controller/userController.js";
const router  = express.Router();


router.get("/all",getAllUsers);
router.post("/register",registerUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);




export default router;