const Avance= require("../models/avance");
const express = require('express');
const passport = require ("passport");
const jwt = require ("jsonwebtoken");
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

router.post("/addavance", (req, res, next) => {
    let newAvance = new Avance({
        mois: req.body.mois,
        annee: req.body.annee,
        montantAvance: req.body.montantAvance,
        users: req.body.users

        
    });
    newAvance.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Avance Save :' + JSON.stringify(err, undefined, 2)); }
    });

   
});
router.get('/', (req, res) => {
    Avance.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Avances :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',passport.authenticate("jwt", {session: false}), (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Avance.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Avance :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var avance = {
        mois: req.body.mois,
        annee: req.body.annee,
        montantAvance: req.body.montantAvance,
        users: req.body.users,
    };
    Avance.findByIdAndUpdate(req.params.id, { $set: avance }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Avance Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Avance.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Avance Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
