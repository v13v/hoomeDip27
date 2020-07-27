import calc from './calc';

const calcAccordion = () => {

    const accordion =document.getElementById('accordion'),
    panelDefault = accordion.querySelectorAll('.panel-default'),//их четыре
    panelРeading = accordion.querySelectorAll('.panel-heading'),//зеленая
    collapse = accordion.querySelectorAll('.collapse'),//  in
    accBtn = document.querySelectorAll('.accbtn'),
    collapseOne = document.querySelector('#collapseOne'),
    collapseTwo = document.querySelector('#collapseTwo'),
    collapseThree = document.querySelector('#collapseThree'),
    collapseFour = document.querySelector('#collapseFour'),
    dnone = document.querySelector('.d-none'),
    checkbox = document.getElementById('myonoffswitch'),
    myonoffswitchTwo = document.getElementById('myonoffswitch-two');
   // let res;
    

        const closeDnone = () =>{
            dnone.style.display = 'none';
        };
        closeDnone();
    //раскрываем аккордион
     const  togleTabContent = index => {
         for (let i = 0; i < collapse.length; i++) {
             if (index === i) {
                 collapse[i].classList.remove('in'); 
                 collapse[i].classList.add('in');          
             }else{
                 collapse[i].classList.add('in');
                 collapse[i].classList.remove('in'); 
             }
         }
     };
    panelРeading.forEach((e) => {
        e.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;       
            target = target.closest('.panel-default');
            if (target) {
                    panelDefault.forEach((item, i) => {      
                       if (item === target) {
                            togleTabContent(i);
                 }
              });
           }
        });
    });

        //работа кнопок "Следующий шаг"
     accBtn.forEach((e) => {
        e.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;       
            target = target.closest('.collapse');
           if (target.className === 'panel-collapse collapse in') {
                collapseOne.classList.remove('in'); 
                collapseTwo.classList.add('in'); 
           }else if(target.className === 'panel-collapse two collapse in'){
            collapseTwo.classList.remove('in'); 
            collapseThree.classList.add('in'); 
           }else if(target.className === 'panel-collapse three collapse in'){
           collapseThree.classList.remove('in'); 
           collapseFour.classList.add('in'); 
           }
        });
    });

//     const dNone = () => {         
//          checkbox.addEventListener('change', (e)=>{
//              let target = e.target;
//              let res;
//             if (target.checked){
//                 dnone.style.display = 'none';
//                 res = 10000;
                              
//             }else{
//                 dnone.style.display = '';
//                 res = 12000;             
//             }///////////////////
          
//             //Вычисления
//         const calc = () => {
//             console.log(res);
//             const panelBody = document.querySelector('.panel-body'),//родитель
//              calcResult = document.getElementById('calc-result'),//результат
//              expand = document.querySelectorAll('.expand');//селекты
//            console.log(panelBody);
        
//              const countSum = (typeValue) =>{
             
//                let total = 0;
            
//                 total = res * typeValue;           
//                 calcResult.value = total;
//               };
//             //      expand.forEach((e) => {
//             //          e.addEventListener('change', (event)=>{
//             //          const target = event.target;
//             //          let typeValue = target.options[target.selectedIndex].value;
//             //          console.log(typeValue);
        
//             //          countSum(typeValue);
//             //      });
//             //   })
//             panelBody.addEventListener('change',(e)=>{
// console.log(1)
//                 const {target} = e;
//                 const diam = [];
//                 const diamCount= [];

//                 panelBody.querySelectorAll('.diam').forEach(elem =>{
//                     diam.push(elem)
//                 })
//                 console.log(diam)
//             })
//               myonoffswitchTwo.addEventListener('click', (e) => {
//                 let target = e.target;
//                 let resKr;
//                 if(target.checked && res === 12000){
//                     resKr = 2000;
//                 }else if(target.checked && res === 10000){
//                     resKr = 1000;
//                 }
//                 console.log(resKr)
//               })
           
             
            
//             };
//             calc(res);
//          });///////////////
//     };
  
//     dNone();
const data = {
    type: true,
    diam: [],
    diamCount: [],
    bottom: false,
}

accordion.addEventListener('change', (e)=>{
    const {target} = e;
  //  console.log(target);
    if(target.closest('#myonoffswitch')){
        data.type = target.checked;
        if (target.checked){
          dnone.style.display = 'none';                 
                    }else{
                            dnone.style.display = '';                            
                        }
    }else if(target.closest('.diam')){
        const arr =[];
        accordion.querySelectorAll('.diam').forEach((elem)=>{
            arr.push(elem.value)
        })
        data.diam = arr;
       // console.log(data);

    }else if(target.closest('.diamCount')){
        const arr =[];
        accordion.querySelectorAll('.diamCount').forEach((elem)=>{
            arr.push(elem.value)
        })
        data.diamCount = arr;
    }else if(target.closest('#myonoffswitch-two')){
        data.bottom = target.checked;
    }
calc(data);

});
//calc(data);
};


   
export default calcAccordion;