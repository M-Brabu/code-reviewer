import express from 'express'
import {reviewCode} from "../services/aiService.js"
const router = express.Router()
router.post("/",async (req,res)=>{
    try{
    const {code} = req.body
    console.log(code)
    const review = await reviewCode(code);
    res.status(200).json({
        review
    })
}catch(err){
    console.log(err)
    return res.status(503).json({
        message:"AI is experiencing high traffic. Please try again in a few moments."
    })
}
})
export default router
