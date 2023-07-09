const express = require("express");
const app = express();
const { dirname } = require('path');
const path = require('path');
const mongoose = require("mongoose");
const { connect } = require("http2");
const { brotliDecompressSync } = require("zlib");
mongoose.connect('mongodb://localhost/newpbl', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.once('open', function () {
    console.log("Hello");
})
app.use(express.urlencoded({ extended: false }));
var contactshema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    cpassword: { type: String, required: true, unique: true }

})
var potte = mongoose.model("potte", contactshema);


app.listen(80, () => {
  console.log("Application started and Listening on port 3000");
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})
app.use(express.static(__dirname));

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/info", (req, res) => {
  res.sendFile(__dirname + "/info.html");
});
app.post('/register', function (req, res) {
    var doc = new potte(req.body);
    doc.save(function (err, doc) {
        if (err) console.error(err);
        console.log(doc);
    })
    res.sendFile(path.join(__dirname + '/login.html'));
})
app.post('/done', async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    const db = await potte.findOne({ email: email });
    if (db == null) {
        res.sendFile(path.join(__dirname+'/register.html'));
    }
    else {
        if (db.password == pass) {
            res.sendFile(path.join(__dirname + '/index1.html'));
        }
        else {
            res.sendFile(path.join(__dirname+'/login.html'));
        }
    }

})
app.get("/Book", (req, res) => {
    res.sendFile(__dirname + "/payment.html");
  });
  