const showBlock = () => {

const hidden = document.querySelectorAll('.hidden'),
    addSentenceBtn = document.querySelector('.add-sentence-btn');

    addSentenceBtn.addEventListener('click', () => {
    hidden.forEach((e) => {
      e.classList.remove('hidden');
      e.classList.remove('visible-sm-block');
      addSentenceBtn.style.display ='none';  
    });
    });
};
export default showBlock;