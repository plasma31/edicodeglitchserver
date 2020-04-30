const fs = require('fs');

const folder = 'app/.compile-run2/';

var obj = {
 "remove": lang=>{
      fs.unlink(folder,err=>{
        console.log(err);
      });
  
   }
}
module.exports = obj;