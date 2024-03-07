import mongoose, { Document, Schema, Model } from "mongoose";

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  photo?: string;
  following: mongoose.Types.ObjectId[];
  followers: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<UserDocument> = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please tell us your name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
      maxlength: 64,
    },
    photo: String,
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const User: Model<UserDocument> = mongoose.model<UserDocument>(
  "User",
  userSchema
);
export default User;
