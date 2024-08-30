import express from "express"
import bodyParser from "body-parser"
import adminRouter from "./routes/admin.route.js"
import userRouter from "./routes/user.route.js"

const app = express()

app.use(bodyParser.json())
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

