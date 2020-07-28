import calc from './calc';

const calcAccordion = () => {

    const accordion = document.getElementById('accordion'),
        panelDefault = accordion.querySelectorAll('.panel-default'), 
        panelРeading = accordion.querySelectorAll('.panel-heading'), 
        collapse = accordion.querySelectorAll('.collapse'), 
        accBtn = document.querySelectorAll('.accbtn'),
        collapseOne = document.querySelector('#collapseOne'),
        collapseTwo = document.querySelector('#collapseTwo'),
        collapseThree = document.querySelector('#collapseThree'),
        collapseFour = document.querySelector('#collapseFour'),
        dnone = document.querySelector('.d-none');

    const closeDnone = () => {
        dnone.style.display = 'none';
    };
    closeDnone();
    //раскрываем аккордион
    const togleTabContent = index => {
        for (let i = 0; i < collapse.length; i++) {
            if (index === i) {
                collapse[i].classList.remove('in');
                collapse[i].classList.add('in');
            } else {
                collapse[i].classList.add('in');
                collapse[i].classList.remove('in');
            }
        }
    };
    panelРeading.forEach((e) => {
        e.addEventListener('click', (event) => {
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
        e.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            target = target.closest('.collapse');
            if (target.className === 'panel-collapse collapse in') {
                collapseOne.classList.remove('in');
                collapseTwo.classList.add('in');
            } else if (target.className === 'panel-collapse two collapse in') {
                collapseTwo.classList.remove('in');
                collapseThree.classList.add('in');
            } else if (target.className === 'panel-collapse three collapse in') {
                collapseThree.classList.remove('in');
                collapseFour.classList.add('in');
            }
        });
    });

    const data = {
        type: true,
        diam: 0,
        diamCount: 0,
        bottom: false,
    }

    accordion.addEventListener('change', (e) => {
        const {
            target
        } = e;
        if (target.closest('#myonoffswitch')) {
            data.type = target.checked;
            if (target.checked) {
                dnone.style.display = 'none';
            } else {
                dnone.style.display = '';
            }
        } else if (target.closest('.diam')) {
            const arr = []
            accordion.querySelectorAll('.diam').forEach(elem => {
                arr.push(elem.value)
            })
            const reducer = (acc, val) => +acc + +val
            data.diam = arr.reduce(reducer, 0)
        } else if (target.closest('.diamCount')) {
            const arr = []
            accordion.querySelectorAll('.diamCount').forEach(elem => {
                arr.push(elem.value)
            })
            const reducer = (acc, val) => +acc + +val
            data.diamCount = arr.reduce(reducer, 0)
        } else if (target.closest('#myonoffswitch-two')) {
            data.bottom = target.checked
        }
        calc(data);
    });
};



export default calcAccordion;