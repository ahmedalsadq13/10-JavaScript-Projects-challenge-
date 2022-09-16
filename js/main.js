/* Fisrt Project commponents (main nav) */
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

/* Second Project commponents (Toast Notification) */

const notifyBtn = document.getElementById("notify-btn");
const notifyContainer = document.getElementById('notify-container');

notifyBtn.addEventListener('click', ()=>{
    createNotification();
});

createNotification = _=> {
        const notifyBox = document.createElement('div'); 
        notifyBox.classList.add('notify-box');

        notifyBox.innerText = 'This challenge is crazy';
        notifyContainer.appendChild(notifyBox);
        setTimeout(_=>{
            notifyBox.remove();
        },3000)
}

/* Third Project commponents (Auto Writing ) */
const text = `Welcome to my website, My name is Ahmed.`;
const autoTextContainer = document.getElementById('auto-text-container');

let indx = 0;

autoWriting = ()=>{
    
    
    autoTextContainer.innerHTML = text.slice(0,indx);

    indx++;

    if (indx > text.length - 1){
        indx = 0;
    }
}
setInterval(autoWriting,100);

/* Forth Project commponents (Popup button) */

const popupBtnOpen = document.getElementById('popup-btn-open');
const popupBtnClose = document.getElementById('popup-btn-close');
const popupContainer = document.querySelector('.popup-container');
const popupBox = document.querySelector('.popup');

popupBtnOpen.addEventListener('click',()=>{
    popupContainer.classList.add('active');
    
})
popupBtnClose.addEventListener('click',()=>{
    popupContainer.classList.remove('active');
});

/* Fifth Project ( Hearts rain )*/

const heartsRain = document.querySelector('.hearts-rain');
createHeart = ()=> {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random()* 100}vw`;
    heart.style.animationDirection = `${Math.random() * 2 + 3}s`;
    heart.innerHTML = `&hearts;`;
    heartsRain.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    }, 5000);
}

/* Sixth Project ( Changing Background )*/
const changeBgBtn = document.getElementById('change-bg-btn');

changeBgBtn.addEventListener('click',_=>document.body.style.backgroundColor = randomBg());

randomBg = _=>`hsl(${Math.floor(Math.random()* 360)}, 30%, 60%)`;

/* Seventh Project ( Toggle Theme )*/

const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('change',e=>{
    document.body.classList.toggle('dark-mood', e.target.checked)
});

/* Eighth Project ( carousel )*/
const carousel = document.querySelector('.carousel');
const imgsContainer = document.getElementById('imgs-container');
const carouselImgs = document.querySelectorAll('#imgs-container img');
const navRight = document.querySelector('.nav-right');
const navLeft = document.querySelector('.nav-left');

const numOfItems = carouselImgs.length;
const carouselWidth = carousel.clientWidth;
const maxRight = carouselWidth * numOfItems;
const minLeft = 0;
const carouselTransform = imgsContainer.style.transform;

let allPhotos = [...carouselImgs];


(autoSlide = ()=>{

    if (0 > imgsContainer.style.translateX ) {
        imgsContainer.style.transform = `translateX(0px)`
    }
    if ( imgsContainer.style.translateX > maxRight ) {
        imgsContainer.style.transform = `translateX(4000px)`
    }
    navLeft.addEventListener('click', ()=>{
        imgsContainer.style.transform += `translateX(${carousel.clientWidth}px)`;  
        /* belong to => Ninth Project ( sounds)*/
        document.getElementById('pop').play();  
    });
    navRight.addEventListener('click', ()=>{
        imgsContainer.style.transform += `translateX(${- carousel.clientWidth}px)`;      
        /* belong to => Ninth Project ( sounds)*/  
        document.getElementById('pop').play();             
    });
  

})()


/* Ninth Project ( sounds )*/
// window.onload = ()=>{    
//     setTimeout(()=>{document.getElementById('peace').play()},5000);
// }

/* Tenth Project ( Zooming )*/
const zoom = document.getElementById('zoom');
const zoomingImg = document.querySelector('#zoom img');

zoom.addEventListener('mousemove',(e)=>{
    const x = e.clientX - e.target.offsetLeft ;
    const y = e.clientY - e.target.offsetTop + 700;

    zoomingImg.style.transformOrigin = `${x}px ${y}px`;
    zoomingImg.style.transform = `scale(1.5)`;
    console.log(x);
    console.log(y);
});

zoom.addEventListener('mouseleave', ()=>{

    zoomingImg.style.transformOrigin = `center center`
    zoomingImg.style.transform = `scale(1)`;
})


