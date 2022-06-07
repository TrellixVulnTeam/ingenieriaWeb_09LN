"use strict";
require('dotenv').config();
var express = require("express");
var cripto = require("crypto-js");
var config = require('./config.js');
//LEER VARIABLES DE ENTORNO USANDO DOTENV
console.log("variable de entorno .env: " + process.env.KEY);
/* WORKING WITH SHA256 LIBRERÍA NPM
const sha256=require("sha256");
console.log(sha256('hello'));

console.log(sha256('hello', { asString: true }));
console.log(sha256('hello', { asBytes: true }));
*/
//WORKING WITH CRIPTO
var password = "1234";
var encriptado1 = cripto.AES.encrypt(password, '123').toString();
var desencriptado1 = cripto.AES.decrypt(encriptado1, config.KEY);
var encriptado2 = cripto.SHA256(password, config.KEY).toString();
console.log("encriptado AES:" + encriptado1);
console.log("encriptado SHA256:" + encriptado2);
console.log("desencriptado AES:" + desencriptado1.toString(cripto.enc.Utf8));
