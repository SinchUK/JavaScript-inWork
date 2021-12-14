
//Modal



window.addEventListener("DOMContentLoaded", () => {



    function openModal(modalSelector, modalPopupClose) {
        // const modal = document.querySelector(modalSelector); //'.popup_calc_end'
        modalSelector.classList.add('show');
        document.body.style.overflow = "hidden";
        
        closeModal(modalSelector, modalPopupClose);
    }

    function closeModal(modalSelector, modalPopupClose) {
           console.log(modalPopupClose, ' second close');
    
        modalPopupClose.addEventListener('click', (e) => {
            
            modalSelector.classList.remove('show');
            document.body.style.overflow = "";
        });

        modalSelector.addEventListener('click', (e) => {
            if (e.target === modalSelector) {
                modalSelector.classList.remove('show');
                document.body.style.overflow = "";
            }
        });
    }



    function modal() {
     
        const modalTrigger = document.querySelectorAll("[data-modal]");
              
            //   console.log(modal, 'modal');  //'.popup_calc_end'

        modalTrigger.forEach((btn) => {
            const modalEngineer = document.querySelector('.popup_engineer'),
                  modalCall = document.querySelector('.popup');

            btn.addEventListener('click', (e) => {

                if (e.target.dataset.modal === 'popup') {
                    const modal = modalCall,
                          modalPopupClose = modal.querySelector('.popup_close');
                    console.log(modalPopupClose, 'close epop');
                    openModal(modalCall, modalPopupClose);
                } 
                if (e.target.dataset.modal === 'popup-engineer') {
                    const modal = modalEngineer,
                          modalPopupClose = modal.querySelector('.popup_close');
                    console.log(modalPopupClose, 'close eng');
                    openModal(modalEngineer, modalPopupClose);
                }
                    
            });
        });




    }

    modal();
});