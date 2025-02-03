const mongoose = require("mongoose");

const BloodRequestSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bloodType: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ["pending", "fulfilled", "canceled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BloodRequest", BloodRequestSchema);
