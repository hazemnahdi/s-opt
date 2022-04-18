const Conge= require("../models/conge");
const express = require('express');
const passport = require ("passport");
const jwt = require ("jsonwebtoken");
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;

router.post("/addconge", (req, res, next) => {
    let newConge = new Conge({
        dateDebut:req.body.dateDebut,
        dateFin:req.body.dateFin,
        users: req.body.users

        
    });
    newConge.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Conge Save :' + JSON.stringify(err, undefined, 2)); }
    });

   
});
router.get('/', (req, res) => {
    Conge.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Conges :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id',passport.authenticate("jwt", {session: false}), (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Conge.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Conge :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var conge = {
        dateDebut: req.body.dateDebut,
        dateFin: req.body.dateFin,
        users: req.body.users,
    };
    Conge.findByIdAndUpdate(req.params.id, { $set: conge }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Conge Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Conge.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Conge Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;
