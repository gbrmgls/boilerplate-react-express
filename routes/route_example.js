const express = require("express");
const db = require("../database.js")
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("Hello!");
});

router.get("/db_test", (req, res, next) => {
    db.raw("SELECT * FROM TableName")
        .then((data) => {
            res.send(data);
        }).catch(err => {
            console.log(err)
            res.send(err);
        })
});

router.get("/param_test/:id", (req, res, next) => {
    res.status(200).send(`Hello! Parameter: ${req.params.id}`);
});



module.exports = router;
