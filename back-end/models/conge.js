const mongoose = require("mongoose");


const CongeSchema = mongoose.Schema({
     dateDebut:String,
     dateFin:String,
     users : [
        {
            type: mongoose.Schema.Types.ObjectId,
            name:mongoose.Schema.Types.name,
            ref: 'User'
        }
    ]
});
const Conge = module.exports = mongoose.model("Conge",CongeSchema);