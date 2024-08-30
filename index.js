import express from "express";
import {z} from "zod"

const app = express()

app.use(express.json())


const schema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(8,{message: "Password must be atleast 8 characters"}),
  country: z.literal("IN").or(z.literal("US"))
})

app.post("/login", function(req,res){
  const {email, password, country} = req.body;
  const response = schema.safeParse({
    email,
    password,
    country
  })
  res.send({
    response
  })
})

app.listen(3000);