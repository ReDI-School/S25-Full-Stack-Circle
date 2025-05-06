import express from "express"
import {signup} from "../controllers/userRegistrationsController.js"
import {login} from "../controllers/loginController.js"

const router = express.Router()

router.post('/signup', signup);
router.post('/login', login)

export default router