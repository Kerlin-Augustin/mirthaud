import express from "express";
import { disclaimerController } from "../../controllers/modal/disclaimerController";

const router = express.Router()

router.get('/disclaimer', disclaimerController)

export default router