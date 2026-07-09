import express from 'express'
const router = express.Router()
router.post("/",(req,res)=>{
    const code = req.body
    console.log(code)
    res.send(code)
})
export default router
