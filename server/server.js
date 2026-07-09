import app from './app.js'
import dotenv from "dotenv"
dotenv.config()
const PORT=process.env.PORT||1000

app.listen(PORT,()=>{console.log(`Server is Running on ${PORT}`)})