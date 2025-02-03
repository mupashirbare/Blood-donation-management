const express = require("express");
const User = require("../models/User");
const BloodRequest = require("../models/BloodRequest");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get All Users (Admin Only)
router.get("/users", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ msg: "Not authorized" });

    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get All Blood Requests (Admin Only)
router.get("/requests", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ msg: "Not authorized" });

    const requests = await BloodRequest.find().populate("recipient", "name email");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete User (Admin Only)
router.delete("/users/:id", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ msg: "Not authorized" });

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    await user.deleteOne();
    res.json({ msg: "User removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
