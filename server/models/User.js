import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },

    username: { type: String, required: true },

    email: { type: String, required: true },

    image: { type: String, required: true },

    role: { type: String, enum: ["user", "agencyOwner"], default: "user" },

    recentSearchedCities: [{ type: String }],
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

export default user;
