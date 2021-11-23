const express = require('express');
const app = express();
const formidable = require('formidable');
const form = new formidable.IncomingForm();
const cors=require("cors");
const fs = require('fs');
const path = require('path');

const configuracion={
    hostname: "127.0.0.1",
    port: 3000,
}

app.use(cors());

app.post('/upload',(req:any,res:any,next:any)=>{

  const form = formidable({});
  form.parse(req, function(err:any, fields:any, files:any) {

    // `file` is the name of the <input> field of type `file`
    let old_path = files.file.filepath;
    let file_size = files.file.size;
    let file_ext = files.file.originalFilename.split('.').pop();
    let index = old_path.lastIndexOf('/') + 1;
    let file_name = old_path.substr(index);
    let new_path = __dirname+"/../../Images/src/assets/uploads/"+files.file,originalFilename;
    //let new_path = "/uploads/"+file_name + '.' + file_ext;

    console.log(old_path);
    
    fs.readFile(old_path, function(err:any, data:any) {
      fs.writeFile(new_path, data, function(err:any) {
          fs.unlink(old_path, function(err:any) {
              console.log(new_path);
              console.log(data);
              if (err) {
                  res.status(500);
                  res.json({'success': false});
              } else {
                 
                  //res.status(200);
                  //res.json({'success': true,'path':new_path});
              }
          });
      });
  });
  res.json({fields, files });
});
   
});

app.get('/files',(req:any,res:any,next:any)=>{
  const directoryPath = __dirname+"/../../Images/src/assets/uploads/";
  fs.readdir(directoryPath, function (err:any, files:any) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos:any = [];

    files.forEach((file:any) => {
      fileInfos.push({
        name: file,
        url: "../../assets/uploads/"+file,
      });
    });

    res.status(200).send(fileInfos); 
  });  
});



app.listen(configuracion, () => {
  console.log(`Conectando al servidor http://localhost:${configuracion.port}`)
})