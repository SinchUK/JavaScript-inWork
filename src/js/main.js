/*jshint esversion: 6 */ 
import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from "./modules/timer";
import images from './modules/imges';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2022-01-01';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();

});


    // //Modal
    // function openModal(modalSelector, modalPopupClose) {
    //     // const modal = document.querySelector(modalSelector); //'.popup_calc_end'
    //     modalSelector.classList.add('show');
    //     document.body.style.overflow = "hidden";
        
    //     closeModal(modalSelector, modalPopupClose);
    // }

    // function closeModal(modalSelector, modalPopupClose) {
    //        console.log(modalPopupClose, ' second close');
    
    //     modalPopupClose.addEventListener('click', (e) => {
            
    //         modalSelector.classList.remove('show');
    //         document.body.style.overflow = "";
    //     });

    //     modalSelector.addEventListener('click', (e) => {
    //         if (e.target === modalSelector) {
    //             modalSelector.classList.remove('show');
    //             document.body.style.overflow = "";
    //         }
    //     });
    // }



    // function modal() {
     
    //     const modalTrigger = document.querySelectorAll("[data-modal]");
              
    //         //   console.log(modal, 'modal');  //'.popup_calc_end'

    //     modalTrigger.forEach((btn) => {
    //         const modalEngineer = document.querySelector('.popup_engineer'),
    //               modalCall = document.querySelector('.popup');

    //         btn.addEventListener('click', (e) => {

    //             if (e.target.dataset.modal === 'popup') {
    //                 const modal = modalCall,
    //                       modalPopupClose = modal.querySelector('.popup_close');
                    
    //                 openModal(modalCall, modalPopupClose);
    //             } 
    //             if (e.target.dataset.modal === 'popup-engineer') {
    //                 const modal = modalEngineer,
    //                       modalPopupClose = modal.querySelector('.popup_close');
                    
    //                 openModal(modalEngineer, modalPopupClose);
    //             }
                    
    //         });
    //     });




    // }

    // modal();

//__________________________________________________________________________________

//Form

// const froms = document.querySelectorAll('form');

// const message = {
//     loading: "loading",
//     sucsess: "sucsess",
//     failure: "failure"
// };

// froms.forEach((item) => {
//     postData(item);
// });


// function postData(form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const statusMessage = document.createElement('div');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);

//         const userPhoneInputs = document.querySelectorAll("input[name='user_phone']");

//         userPhoneInputs.forEach((input) => {
//             const reg = '/\D/g';
//             input.addEventListener('input', () => {
//                 const sendBtn = form.querySelector('.button');
//                 if (input.value.match(reg)) {
//                     input.style.border = '1px solid red';
//                     // sendBtn.disable();
//                 } else {
//                     input.style.border = 'none';
//                 }
//             });
//         });


//         const req = new XMLHttpRequest();
//         req.open('POST','server.php');

//         req.setRequestHeader('Content-type', 'application/json');
//         const formData = new FormData(form);

//         const obj = {};
//         formData.forEach(function(value,key) {
//             obj[key] = value;
//         });

//         const json = JSON.stringify(obj);

//         req.send(json);
//         req.addEventListener('load', () => {
//             if (req.status === 200) {
//                 console.log(req.response);
//                 statusMessage.textContent = message.sucsess;
//                 form.reset();
//                 setTimeout(()=> {
//                     statusMessage.remove();
//                 },2000);
//             } else {
//                 statusMessage.textContent = message.failure;
//                 form.reset();
//                 setTimeout(()=> {
//                     statusMessage.remove();
//                 },2000);
//             }
//         });
        
//     });
// }
