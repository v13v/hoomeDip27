const modalWin2 = () => {

    const discountBtn = document.querySelectorAll('.discount-btn'),
        popupClose = document.querySelectorAll('.popup-close'),
        popupDiscount = document.querySelector('.popup-discount');
    
        discountBtn.forEach((e) => {
            e.addEventListener('click', () => {
                document.body.style.overflow = 'hidden';
                popupDiscount.style.display = 'block';
            });
        });
        popupClose.forEach((e) => {
            e.addEventListener('click', () => {
                popupDiscount.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
        popupDiscount.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.popup-content');
            if (!target){
                popupDiscount.style.display = 'none';
                document.body.style.overflow = '';
         } 
         });
  
    };
 
    export default modalWin2;