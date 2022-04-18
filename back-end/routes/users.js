const express = require("express");
const router = express.Router();
const passport = require ("passport");
const jwt = require ("jsonwebtoken");
const User = require("../models/user");
const config = require("../config/database");


var ObjectId = require('mongodb').ObjectID;

router.post("/register", (req, res, next) => {
    
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        cnss:req.body.cnss,
        rib:req.body.rib,
        urpp:req.body.urpp,
        salaireHoraire:req.body.salaireHoraire,
        dateEmbauche:req.body.dateEmbauche,
        cin:req.body.cin,
        role:req.body.role,
        Tel:req.body.Tel,
        
    });

    User.addUser(newUser, (err, data)=> {
        if(err){
            res.json({success: false, msg: err.message});
        }
        else {
            res.json({success: true, msg: "User registered."});
        }
    });
});

router.post("/authenticate", (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: "User not found."});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800,
                });
                res.json({
                    succes: true,
                    token: token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        role:user.role,
                        dateEmbauche:user.dateEmbauche,
                        rib:user.rib,
                        salaireHoraire:user.salaireHoraire,
                        cnss:user.cnss,
                        urpp:user.urpp,
                        Tel:user.Tel

                    }
                });
            }
            else {
                return res.json({success: false, msg: "Wrong password."});
            }
        });
    });
});

router.get("/profile", passport.authenticate("jwt", {session: false}), (req, res, next)=>{
    res.json({
        user: req.user
    });
});
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        cnss:req.body.cnss,
        rib:req.body.rib,
        urpp:req.body.urpp,
        salaireHoraire:req.body.salaireHoraire,
        dateEmbauche:req.body.dateEmbauche,
        cin:req.body.cin,
        role:req.body.role,
        Tel:req.body.Tel
    };
    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;