import express from 'express'
const router = express.Router()
router.post("/",(req,res)=>{
    const code = req.body
    console.log(code)
    res.json({"message":"code received for review"})
})
export default router
