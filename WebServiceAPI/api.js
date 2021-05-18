"use strict";
var qs = require("querystring");
var http = require("https");
var texto = "welcome, how are you?";
var options = {
    "method": "POST",
    "hostname": "google-translate1.p.rapidapi.com",
    "port": null,
    "path": "/language/translate/v2",
    "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "accept-encoding": "application/gzip",
        "x-rapidapi-key": "5794f1a6fcmshcced48b6e9cb43ap18fadbjsnf7e959d5bee8",
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "useQueryString": true
    }
};
var req = http.request(options, function (res) {
    var chunks = [];
    res.on("data", function (chunk) {
        chunks.push(chunk);
    });
    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});
req.write(qs.stringify({ q: texto, target: 'es', source: 'en' }));
req.end();
