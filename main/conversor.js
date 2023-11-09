
 const NewSideNumber = async(value)=>{
 const newNumber = await (Math.E / parseInt(value,10)) +  value >> 1;
 return newNumber;
}

const NewArrayNumber = (data)=>{
    const values = []
    for ( let a  = 0 ; a < String(data).length ; a++){
        values.push(parseInt(String(data).charAt(a)));
    }
  return values;
}

const main = async (data)=>{
  const news = []
const ArrayData = NewArrayNumber(data);
ArrayData.map(async(element)=>{
  let me = await NewSideNumber(element)
  await news.push(me)

});
return await news
}

module.exports = { main, NewArrayNumber}