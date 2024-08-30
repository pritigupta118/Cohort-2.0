import mongoose, {Schema} from "mongoose";

const courseSchema = new Schema ({
  title : String,
  description: String,
  imgLink : String,
  price: Number
})

export const Course = mongoose.model("Course", courseSchema)