const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB conectado");
  } catch (err) {
    console.error("Error conectando MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;