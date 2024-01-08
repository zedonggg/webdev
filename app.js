const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const request = require("request");
const path = require('path');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/signup.html'));
})

app.post('/', (req,res) => {

    let fname = req.body.fname;
    let lastname = req.body.lname;
    let email = req.body.email;

    console.log(fname, lastname, email);
})
app.listen(port, () => {
    console.log('running');
}) 