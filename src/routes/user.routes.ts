import { Router} from "express";
import { createUser, deleteUsers, getUser, getUsers, updateUsers } from "../controlller/user.controller";

const router = Router();

router.post("/users", createUser );
router.get("/users", getUsers );
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);
router.get("/users/:id", getUser);

export default router;