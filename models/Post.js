import mongoose, { mongo } from "mongoose";

const PostSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      min: 5,
      max: 200,
    },
    lastName: {
      type: String,
      required: true,
      min: 5,
      max: 200,
    },
    location: String,
    picturePath: String,
    description: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

export default Post;
