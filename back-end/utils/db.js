const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb://127.0.0.1:27017/CoList" ;

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("Connecté à MongoDB avec Mongoose");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    process.exit(1); 
  }
}

module.exports.MONGO_URI = MONGO_URI;

module.exports.connectToDatabase = connectToDatabase;