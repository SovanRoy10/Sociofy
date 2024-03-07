import mongoose, { Document, Schema, Model } from "mongoose";

interface PostDocument extends Document {
  content: string;
  postedBy: mongoose.Types.ObjectId | string;
  image?: {
    url: string;
    public_id: string;
  };
  likes: (mongoose.Types.ObjectId | string)[];
  comments: {
    text: string;
    created?: Date;
    postedBy: mongoose.Types.ObjectId | string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema: Schema<PostDocument> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      url: String,
      public_id: String,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timestamps: true }
);

const PostModel: Model<PostDocument> = mongoose.model<PostDocument>(
  "Posts",
  postSchema
);

export default PostModel;
