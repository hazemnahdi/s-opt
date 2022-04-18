const express = require ("express");
const sessions=require("express-session")
const path = require ("path");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const passport = require ("passport");
const mongoose = require ("mongoose");
const config = require("./config/database");

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', ()=>{
    console.log("connected to database " + config.database);
});

mongoose.connection.on('error', (err)=>{
    console.log("Database error " + err);
});

const app = express();

const users = require("./routes/users");
const avances=require("./routes/avances");
const conges=require("./routes/conges");
const primes=require("./routes/primes")

const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());
app.use(passport.initialize());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);
app.use("/avanves",avances);
app.use("/conges",conges);
app.use("/primes",primes);


app.get("/", (req, res)=>{
    res.send("Invalid endpoint!");
});

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, ()=>{
    console.log("The server started on port " + port);
});