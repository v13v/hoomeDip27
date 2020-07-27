const calc = (data) => {
    const calcResult = document.getElementById('calc-result');
//console.log(+!data.type +1);
const type = +!data.type +1
const count =  (+!data.type +1 === 1) ? 10000 : 150000;
const diamCount = data.diamCount[0] || 0;
const diam = data.diam[0] || 0;

 const bottom = (data.bottom) ? 1000 : 0;
    let sum = count;
    if(type === 1){
        console.log((count * data.diam[0]));
        console.log(count * diamCount );
      sum = count + (count * diam) +(count * diamCount ) + bottom;
    
//console.log(data);

    }else {
        sum = count + (count * diam * 2) +(count * diamCount * 2) + bottom *2;
       console.log(data.diam[0]);  
    }
calcResult.value = sum;
//console.log(data);
}
export default calc