import express from "express"
import {signup} from "../controllers/userRegistrationsController.js"

const router = express.Router()

router.post('/signup', signup);

export default router