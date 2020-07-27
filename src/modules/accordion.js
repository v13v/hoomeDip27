const accordion = () => {

    const accordionTwo =document.getElementById('accordion-two'),
    panelCollapse = accordionTwo.querySelectorAll('.panel-heading'),
    collapse = accordionTwo.querySelectorAll('.collapse');
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
    accordionTwo.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
       
        target = target.closest('.panel-heading');
        if (target) {
            panelCollapse.forEach((item, i) => {
                if (item === target) {
                    togleTabContent(i);
                }
            });
        }
    });

};

export default accordion;


