import express from "express";
import jobs from "./jobs";
import addUser from './addUser';
const router = express.Router();

router.use("/jobs", jobs);
router.use('/users', addUser)
export default router;
