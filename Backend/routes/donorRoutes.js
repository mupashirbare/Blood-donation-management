const express = require("express");
const Donor = require("../models/Donor");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add or Update Donor Profile
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { bloodGroup, available, location, contactNumber } = req.body;

    let donor = await Donor.findOne({ user: req.user.id });
    if (donor) {
      donor.bloodGroup = bloodGroup;     
      donor.available = available;
      donor.location = location;
      donor.contactNumber= contactNumber;
      await donor.save();
      return res.json(donor);
    }

    donor = new Donor({ user: req.user.id, bloodGroup, available, location, contactNumber  });
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get All Available Donors
router.get("/", async (req, res) => {
  try {
    const donors = await Donor.find({ available: true }).populate("user", "name email");
    res.json(donors);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Get a Donor by ID
router.get("/:id", async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id).populate("user", "name email");
    if (!donor) return res.status(404).json({ msg: "Donor not found" });
    res.json(donor);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Delete Donor Profile
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    let donor = await Donor.findById(req.params.id);
    if (!donor) return res.status(404).json({ msg: "Donor not found" });

    if (donor.user.toString() !== req.user.id)
      return res.status(403).json({ msg: "Not authorized" });

    await donor.deleteOne();
    res.json({ msg: "Donor removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
