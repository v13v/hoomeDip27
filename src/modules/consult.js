const consult =()=>{
    const consultationBtn = document.querySelector('.consultation-btn'),
    popupConsultation = document.querySelector('.popup-consultation'),
    popupClose = popupConsultation.querySelector('.popup-close');
   
    consultationBtn.addEventListener('click', ()=>{
        document.body.style.overflow = 'hidden';
        popupConsultation.style.display = 'block';
        
    });
    popupClose.addEventListener('click', () => {
        document.body.style.overflow = '';
        popupConsultation.style.display = 'none';
    });
    
    };
    export default consult;