const popupCheck = () => {

    const popupCheckModal = document.querySelector('.popup-check'),
    checkBtn = document.querySelector('.check-btn'),
    popupClose = popupCheckModal.querySelector('.popup-close'); 
    
    checkBtn.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        popupCheckModal.style.display = 'block';
    });
    popupClose.addEventListener('click',() => {
        document.body.style.overflow = '';
        popupCheckModal.style.display = 'none';
    });
    popupCheckModal.addEventListener('click', (event) => {
        document.body.style.overflow = '';
        let target = event.target;
        target = target.closest('.popup-content');
        if (!target){
            popupCheckModal.style.display = 'none';
     } 
     });   
    };
    
    export default popupCheck;