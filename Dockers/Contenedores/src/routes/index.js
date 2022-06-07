"use strict";
var Router = require("express").Router;
var router = Router();
router.get('/', function (req, res) {
    res.json("hola mundo");
});
module.exports = router;
