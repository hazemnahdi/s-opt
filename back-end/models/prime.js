const mongoose = require("mongoose");


const PrimeSchema = mongoose.Schema({
     mois:String,
     annee:String,
     montantPrime:Number,
     libelle:String
});
const Prime = module.exports = mongoose.model("Prime", PrimeSchema);