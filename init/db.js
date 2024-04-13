const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/eduvantage";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB!");

        await initDB();
        console.log("Data initialization completed!");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        mongoose.disconnect(); // Close the MongoDB connection after initialization
        console.log("MongoDB connection closed.");
    }
}

main();
