const { coding } = require("./main/calc");
const { verifing } = require("./verifyInput");

async function EncriptV1(data){
    if(verifing(data)){
        yourCod = await coding(data);
        return yourCod;
    }else{
        return "Verify your input some not permited simbol try staring your password with number";
    }
}

EncriptV1(143511).then(result => console.log(result))