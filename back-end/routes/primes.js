const Prime= require("../models/prime");
const express = require('express');
const passport = require ("passport");
const jwt = require ("jsonwebtoken");
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

router.post("/addprime", (req, res, next) => {
    let newPrime = new Prime({
        mois: req.body.mois,
        annee: req.body.annee,
        montantPrime: req.body.montantPrime,
        libelle:req.body.libelle

        
    });
    newPrime.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Prime Save :' + JSON.stringify(err, undefined, 2)); }
    });

   
});
router.get('/', (req, res) => {
    Prime.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Primes :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',passport.authenticate("jwt", {session: false}), (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Prime.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Prime :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var prime = {
        mois: req.body.mois,
        annee: req.body.annee,
        montantPrime: req.body.montantPrime,
        libelle: req.body.libelle,
    };
    Prime.findByIdAndUpdate(req.params.id, { $set: prime }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Prime Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Prime.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Prime Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
