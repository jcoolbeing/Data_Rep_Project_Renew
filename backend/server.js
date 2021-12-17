const express = require('express')
const app = express()
const port = 4000//port 4000
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.get('/',(req, res)=>{
    console.log("server is connected");
})

//body parser
app.use(bodyParser.urlencoded({extended: false}))

//link to mongo database
const mongoConnect = "mongodb+srv://admin:1111@cluster0.emj0p.mongodb.net/project21?retryWrites=true&w=majority";
mongoose.connect(mongoConnect, {useNewUrlParser: true});

const Schema = mongoose.Schema;
var entrySchema = new Schema({
    title:String, mainBody:String
});
// turning the schema into a model for mongoose
var EntryModel = mongoose.model("entries", entrySchema);


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})