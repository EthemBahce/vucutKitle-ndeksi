const express = require('express');
const app = express();
const bodyParser=require("body-parser");



app.use(bodyParser.urlencoded,({extended:true}));
app.use(express.static("public"));


app.post("/",(req, res)=>(

  let kilo = req.body.kilo;
  let boy = req.body.boy;
  let hesap = kilo/(boy*boy);
  res.send("Vucut Kitle İndeksin"+ hesap);

));



app.listen(3000,()=>{

console.log("server calisiyor");

});
