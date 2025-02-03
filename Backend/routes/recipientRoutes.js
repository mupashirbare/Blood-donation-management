const express = require("express");
const BloodRequest = require("../models/BloodRequest");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Blood Request
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { bloodType, location } = req.body;

    const request = new BloodRequest({
      recipient: req.user.id,
      bloodType,
      location,
    });

    await request.save();
    res.status(201).json(request);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get All Blood Requests
router.get("/", async (req, res) => {
  try {
    const requests = await BloodRequest.find().populate("recipient", "name email");
    res.json(requests);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Update Request Status (Admin Only)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    let request = await BloodRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ msg: "Request not found" });

    if (req.user.role !== "admin")
      return res.status(403).json({ msg: "Not authorized" });

    request.status = status;
    await request.save();
    res.json(request);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete Request (Recipient Only)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    let request = await BloodRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ msg: "Request not found" });

    if (request.recipient.toString() !== req.user.id)
      return res.status(403).json({ msg: "Not authorized" });

    await request.deleteOne();
    res.json({ msg: "Request removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
