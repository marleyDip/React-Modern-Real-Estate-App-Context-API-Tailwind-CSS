import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // Clerk user ID

    username: { type: String, required: true },

    email: { type: String, required: true },

    image: { type: String, default: "" }, // safer if user has no profile image

    role: { type: String, enum: ["user", "agencyOwner"], default: "user" },

    recentSearchedCities: [{ type: String }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

// recentSearchedCities: { type: [String], default: [] },
