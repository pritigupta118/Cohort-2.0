import mongoose, {Schema} from "mongoose";

const userSchema = new Schema ({
  username : String,
  password: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
})

export const User = mongoose.model("User", userSchema)