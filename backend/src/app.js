import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js"

const app = express()

app.use(cors({ 
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json())

app.use(express.urlencoded({ 
    extended: true 
}))

app.use("/api/bloodbanks", userRouter)

export {app}
