import express from "express";
import morgan from "morgan";
import cors from "cors"
import routes from "./routes/index.js"
const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("<h1>/ response</h1>")
})
app.use("/api",routes)
export default app