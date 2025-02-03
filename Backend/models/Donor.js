const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User model
    bloodGroup: { 
        type: String, 
        enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], 
        required: true 
    }, // Blood group validation
    available: { type: Boolean, default: true }, // Availability status
    location: { type: String, required: true }, // Donor's location
    contactNumber: { type: String, required: true }, // Contact details
}, { timestamps: true });

module.exports = mongoose.model("Donor", donorSchema);
