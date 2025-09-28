import express from "express"
import cors from "cors"
import userRouter from "./routes/user.routes.js"
import { ApiError } from "./utils/ApiError.js"
import path from "path"

const _dirname = path.resolve()



const app = express()

app.use(cors({ 
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json())

app.use(express.urlencoded({ 
    extended: true 
}))

app.use("/api", userRouter)

// connect to frontend folder

app.use(express.static(path.join(_dirname, "/frontend/dist")))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist" , "index.html"))
})



// error handling:-

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors || [],
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }

  return res.status(500).json({
    success: false,
    statusCode: 500,
    message: err.message || "Something went wrong",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

export {app}
