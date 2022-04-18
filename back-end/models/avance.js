const mongoose = require("mongoose");


const AvanceSchema = mongoose.Schema({
     mois:String,
     annee:String,
     montantAvance:Number,
     users : [
        {
            type: mongoose.Schema.Types.ObjectId,
           
            ref: 'User'
        }
    ]
});
const Avance = module.exports = mongoose.model("Avance", AvanceSchema);