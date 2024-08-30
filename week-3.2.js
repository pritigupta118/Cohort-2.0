import express from "express"
import jwt from "jsonwebtoken"

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  { username: "user3", password: "pass3" },
];

const app = express()
const jwtPassword = "123490"

app.use(express.json())

app.post("/login", function(req,res){
  const {username} = req.body

  const token = jwt.sign({username}, jwtPassword)
  res.json({token})
})

app.get("/user", function(req,res){
 try {
   const token = req.headers.authorization;
   if (!token) {
    console.log("Please provide token")
   }
   const decode = jwt.verify(token,jwtPassword)

   const username = decode.username
   console.log(username);
   

   const response = users.filter((user) => user.username !== username)
   
   res.json({response})
 } catch (error) {
  console.log("Invalid token")
 }

})

app.listen(3000)