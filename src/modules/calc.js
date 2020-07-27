const calc = (data) => {
    const calcResult = document.getElementById('calc-result');
//console.log(+!data.type +1);
const type = +!data.type +1
const count =  (+!data.type +1 === 1) ? 10000 : 150000;
const diamCount = data.diamCount[0] || 1;
const diam = data.diam[0] || 1;
 const bottom = (data.bottom) ? 1000 : 0;
    let sum = count;
    if(type === 1){
      sum = count * data.diam[0] * diamCount + bottom;
    //sum = count + (count * data.diam[0]* -diamCount) //* (count * diamCount) + bottom;
console.log(data);

    }else {
        sum = count * diam * diamCount + bottom * 2;
       console.log(data.diam[0]);  
    }
calcResult.value = sum;
console.log(data);
}
export default calc