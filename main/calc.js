const {main} = require('./conversor')

const FirstMatrix = [0,1,1,0]
const SecondMatrix = [1,2,2,1]
const ThirdMatrix = [2,4,4,2]
const simblos = ['#','$','&','@','/','?','*','«','º']
const Lowerletters = [
    'a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n','o','p','q',
    'r','s','t','u','v','x','w','y','z'
]
const upperletters = [
    'A','B','C','D','E','F','G',
    'H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','X','W','Y','Z'
]
let coded = ''
let dataCode = 0
function coding(value){
return codi(value);
}

const codi = (value) => main(value).then((result) =>{
    const splited = [];
    const welSplited = [];
    const newMult = [];
    const codifide = [];
    const cod = [];
    let codstring = ''
    for(let i =0; i<result.length; i++){
 for( let a=0; a<3; a++){
   const split = [result[a],result[a+1],result[a+2],result[a+3]];
    split.forEach((iten)=>{
        if(typeof(iten) !== 'undefined'){
            welSplited.push(iten)
        }else{
            welSplited.push(0)
        }
    });
}
splited.push(welSplited);
for(let c=0; c< welSplited.length;c++){
    welSplited.pop()
}
}
for(let i = 0; i< splited.length;i++){
    for ( let index1 =0; index1 < FirstMatrix.length ;index1++) {
        for ( let index2 = 0; index2 < SecondMatrix.length ;index2++) {
            for ( let index3 =0;  index3 < ThirdMatrix.length ;index3++) {
          let value = splited[i][i] * FirstMatrix[index1]-3 + SecondMatrix[index2] * ThirdMatrix[index3];
          newMult.push(value);
            }
        } 
    }
}

newMult.forEach((element)=>{
 if(element >= 0 && element <3){
    codifide.push(simblos[element])
 }
 if(element >=3 && element <6){
    codifide.push(element*2)
 }
 if(element >= 6 && element <10){
    codifide.push(Lowerletters[element])
 }
});


for (let p = 0; p < codifide.length; p++ ){
   if(p < 10 && p > 2){
    cod.push(codifide[p-2])
   }
   if(p > 10 && p < 20){
    cod.push(codifide[p-6])
   }
   if(p > 20 && p < 30){
    cod.push(codifide[p-4])
   }
   if(p > 30 && p < 40){
    cod.push(codifide[p-5])
   }
   if(p > 40 && p < 50){
    cod.push(codifide[p-4])
   }
   if(p > 50 && p < 60){
    cod.push(codifide[p-3])
   }
   if(p > 60){
    cod.push(codifide[p-1])
   }
   if(p >0 && p < 2){
    cod.push(codifide[p+10])
   }
}
cod.forEach((iten)=>{
 codstring = codstring.concat(iten)
});

return codstring;
}).then(data=>{
    return data;
})


module.exports = {coding}