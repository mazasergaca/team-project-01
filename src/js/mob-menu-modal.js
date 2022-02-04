(() => {
    const refs = {
      openModalBtn1: document.querySelector('.header-button-buy'),
      closeModalBtn1: document.querySelector('.modal__button'),
      modal1: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn1.addEventListener('click', addModal1);
    refs.closeModalBtn1.addEventListener('click', removeModal1);
  
    function removeModal1() {
      document.body.classList.remove("modal-open");
      refs.modal1.classList.add('is-hidden');
    }

    function addModal1() {
      document.body.classList.add("modal-open");
      refs.modal1.classList.remove('is-hidden');
    }
  })();