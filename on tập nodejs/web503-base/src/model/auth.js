import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "member",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("User", UserSchema);
