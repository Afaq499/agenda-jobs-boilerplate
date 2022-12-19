import express from 'express';
import addUser from '../controller/users/addUsers';
const router = express.Router();

router.post('/', addUser);

export default router;