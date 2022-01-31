const express = require('express'); 
const app = express();   

const fs = require('fs');
const path = require('path');


app.use(express.json());  

app.listen(3500, function() {      
    console.log('3500')
});



app.get('/g', function (req, res) {
  
    let d = fs.readdirSync('../slider/public/pics/images');
   
    res.json(d);
      
});



      
