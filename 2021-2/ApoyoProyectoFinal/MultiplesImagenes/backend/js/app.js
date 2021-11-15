"use strict";
var express = require('express');
var app = express();
var formidable = require('formidable');
var form = new formidable.IncomingForm();
var cors = require("cors");
var fs = require('fs');
var path = require('path');
var configuracion = {
    hostname: "127.0.0.1",
    port: 3000,
};
app.use(cors());
app.post('/upload', function (req, res, next) {
    var form = formidable({});
    form.parse(req, function (err, fields, files) {
        // `file` is the name of the <input> field of type `file`
        var old_path = files.file.filepath;
        var file_size = files.file.size;
        var file_ext = files.file.originalFilename.split('.').pop();
        var index = old_path.lastIndexOf('/') + 1;
        var file_name = old_path.substr(index);
        var new_path = __dirname + "/../../Images/src/assets/uploads/" + file_name + '.' + file_ext;
        fs.readFile(old_path, function (err, data) {
            fs.writeFile(new_path, data, function (err) {
                fs.unlink(old_path, function (err) {
                    if (err) {
                        //res.status(500);
                        //res.json({'success': false});
                    }
                    else {
                        //res.status(200);
                        //res.json({'success': true,'path':new_path});
                    }
                });
            });
        });
    });
    //res.json({ fields, files });
});
app.get('/files', function (req, res, next) {
    var directoryPath = __dirname + "/../../Images/src/assets/uploads/";
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }
        var fileInfos = [];
        files.forEach(function (file) {
            fileInfos.push({
                name: file,
                url: "../../assets/uploads/" + file,
            });
        });
        res.status(200).send(fileInfos);
    });
});
app.listen(configuracion, function () {
    console.log("Conectando al servidor http://localhost:" + configuracion.port);
});
