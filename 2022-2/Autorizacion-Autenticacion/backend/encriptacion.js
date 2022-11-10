"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desencriptarToken = exports.encriptarToken = exports.validarPassword = exports.encriptar = void 0;
var cripto = require("crypto");
var algoritmo = 'aes-256-cbc'; //Using AES encryption
var key = cripto.randomBytes(32);
var iv = cripto.randomBytes(16);
function encriptar(text, salt) {
    //let salt = cripto.randomBytes(16).toString('hex'); 
    // Hashing user's salt and password with 1000 iterations, 
    var hash = cripto.pbkdf2Sync(text, salt, 1000, 64, "sha512").toString("hex");
    //console.log(salt);
    return hash;
}
exports.encriptar = encriptar;
function validarPassword(text, salt) {
    var hash = cripto.pbkdf2Sync(text, salt, 1000, 64, "sha512").toString("hex");
    return hash;
}
exports.validarPassword = validarPassword;
function encriptarToken(text) {
    var cipher = cripto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    var encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}
exports.encriptarToken = encriptarToken;
function desencriptarToken(text) {
    var iv = Buffer.from(text.iv, 'hex');
    var encryptedText = Buffer.from(text.encryptedData, 'hex');
    var decipher = cripto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    var decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.desencriptarToken = desencriptarToken;
