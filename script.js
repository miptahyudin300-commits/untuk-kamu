// ==========================
// ELEMENT
// ==========================

const welcome = document.getElementById("welcome");
const gallery = document.getElementById("gallery");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;


// ==========================
// BUKA SURAT
// ==========================

startBtn.addEventListener("click",()=>{

    welcome.classList.add("hide");

    setTimeout(()=>{

        welcome.style.display="none";
        gallery.style.display="flex";

    },1000);


    // mulai lagu
    music.play().catch(()=>{});

});



// ==========================
// SLIDER MANUAL
// ==========================

function showSlide(i){

    slides.forEach(item=>{
        item.classList.remove("active");
    });

    dots.forEach(item=>{
        item.classList.remove("active");
    });


    slides[i].classList.add("active");
    dots[i].classList.add("active");

}



// tombol kanan

nextBtn.addEventListener("click",()=>{

    index++;

    if(index >= slides.length){

        index=0;

    }

    showSlide(index);

});



// tombol kiri

prevBtn.addEventListener("click",()=>{

    index--;

    if(index < 0){

        index=slides.length-1;

    }

    showSlide(index);

});



// ==========================
// SWIPE HP
// ==========================

let startX=0;


gallery.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});


gallery.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;


    if(startX-endX > 50){

        nextBtn.click();

    }


    if(endX-startX > 50){

        prevBtn.click();

    }

});



// ==========================
// LOVE PUTIH DIAM
// ==========================

const loveBox=document.getElementById("love-container");


let lovePos=[

    {
        top:"10%",
        left:"10%"
    },

    {
        top:"70%",
        right:"15%"
    },

    {
        top:"35%",
        left:"5%"
    }

];


lovePos.forEach(pos=>{

    let love=document.createElement("div");

    love.className="decor-love";

    love.innerHTML="🤍";


    Object.assign(love.style,pos);


    loveBox.appendChild(love);

});




// ==========================
// BUNGA PINK DIAM
// ==========================

const flowerBox=document.getElementById("flower-container");


let flowerPos=[

    {
        top:"20%",
        right:"10%"
    },

    {
        bottom:"15%",
        left:"10%"
    },

    {
        top:"60%",
        right:"5%"
    }

];



flowerPos.forEach(pos=>{


    let flower=document.createElement("div");


    flower.className="decor-flower";


    flower.innerHTML="🌸";


    Object.assign(flower.style,pos);


    flowerBox.appendChild(flower);


});