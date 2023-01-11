'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    console.log("Button Clicked")
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//Key press event listener
//keyup - happens when we lift finger off a certain key
//keypress - fired continuously as we keep our finger on a certain key
//keydown - Fired as soon as we press down a key
document.addEventListener('keydown', function(e){
    console.log("A key was pressed")
    console.log(typeof(e.key))

    if (e.key == "Escape"){
        // Check if element contains a class
        if (!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})