const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ["admin", "donor", "recipient"], 
        default: "recipient" 
    }, // User roles
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
