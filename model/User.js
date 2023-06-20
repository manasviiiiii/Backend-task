const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    id: {
      required: [true, "id is required"],
      type: Number,
    },
    name: {
      required: [true, "name is required"],
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
