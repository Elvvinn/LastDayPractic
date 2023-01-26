const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
const app = express();

app.use(cors())
app.use(bodyParser.json())



const { Schema } = mongoose;

const newSchema = new Schema({

    imageUrl: { type: String },
    name: { type: String },
    price: { type: Number },
    title: { type: String },


})

const TrendCards = mongoose.model("trendcard", newSchema)



app.get("/cards", (req, res) => {
    TrendCards.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404)
        }
    })
})



app.get("/cards/:id", (req, res) => {
    const { id } = req.params
    TrendCards.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }
        }
        else {
            res.status(404)
        }
    })
})

app.delete("/cards/:id", (req, res) => {
    const { id } = req.params
    TrendCards.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send({ message: "Succesfully deleted this item" })
        }
        else {
            res.status(404)
        }
    })
})


app.post("/cards", (req, res) => {

    let newcardtrend = new TrendCards({
        imageUrl: req.body.imageUrl,
        name: req.body.name,
        price: req.body.price,
        title: req.body.title
    })

    newcardtrend.save();

    res.send({ message: "Succesfully added" })

})



app.get("/", (req, res) => {
    res.send("<h1> Bugun hec kim paylamiyacaq </h1>")
})


const PORT = process.env.PORT

const url = process.env.connection_url.replace(
    "<password>",
    process.env.PASSWORD
)

mongoose.set('strictQuery', false);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("Db is connected")

        app.listen(PORT, () => {
            console.log("Server is running")
        })
    }
})


