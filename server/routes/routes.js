import express from "express"
import reviewRoute from "./reviewRoute.js"

const router = express.Router()
router.use("/review",reviewRoute)

export default router