
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const app = require('./app'); 

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URL || process.env.MONGODB_URI;
if (!MONGO_URI) {
  console.error("❌ Error: No está definida la variable MONGO_URL o MONGODB_URI en .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });