const { NewArrayNumber } = require("./main/conversor");

function verifing(data){
  dataArry = NewArrayNumber(data);
  for (let index = 0; index < dataArry.length; dataArry++) {
    if(!(dataArry[index] * 2 >= 0) ){
        return false;
      }
  }
    return true;    
}

module.exports = {verifing}