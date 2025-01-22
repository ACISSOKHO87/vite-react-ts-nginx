const express = require("express");
const { MongoClient } = require("mongodb");
let count;
const app = express();

const url = "mongodb://db";

const client = new MongoClient(url);

client
    .connect()
    .then((resp) => {
        console.log("Connect DB Ok");
        count = resp.db("test").collection("count");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/api/count", (req, res) => {
    count
        .findOneAndUpdate(
            {},
            { $inc: { count: 1 } },
            { returnNewDocument: true, upsert: true }
        )
        .then((doc) => {
            res.status(200).json(doc.count);
        });
});

app.all("*", (req, res) => {
    res.status(404).end();
});

app.listen(80);
