// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('.sliderSection').forEach(deptSec => {   
    let items = deptSec.querySelectorAll('.slider .item');
    let next = deptSec.querySelector('#next');
    let prev = deptSec.querySelector('#prev');
    
    let active = 3;
    function loadShow(){

        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = items.length; // Set the active item to the highest z-index
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        items[active].style.pointerEvents = 'auto';
        
        for (var i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) rotateY(-1deg)`;
            items[i].style.zIndex = items.length - stt; // Gradually decrease the z-index
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
            items[i].style.pointerEvents = 'none';
            
        }
        
        stt = 0;
        for (var i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) rotateY(1deg)`;
            items[i].style.zIndex = items.length - stt; // Gradually decrease the z-index
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
            items[i].style.pointerEvents = 'none';
        }
    }//end of loadShow()

    loadShow();

    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
});

