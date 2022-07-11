const sliderImg = document.querySelector("#slider>img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const urlImg = [
    "./assets/img/house2.jpg" ,
    "./assets/img/house3.jpg" ,
    "./assets/img/house4.jpg" ,
    "./assets/img/house5.jpg"
];

let i = 0
sliderImg.src = urlImg[i];
next.addEventListener("click",
    function () {
        if (i === urlImg.length-1) {
            i = 0 ;
            sliderImg.src = urlImg[i];
        } else {
            i++;
            sliderImg.src = urlImg[i];
        }
    });

prev.addEventListener("click", function () {

    if (i=== 0) {
        i = urlImg.length-1;
        sliderImg.src = urlImg[i];
    } else {
         i--;
        sliderImg.src = urlImg[i];
    }
});
setInterval(
    
    function () {
        if (i === urlImg.length-1) {
            i = 0 ;
            sliderImg.src = urlImg[i];
        } else {
            i++;
            sliderImg.src = urlImg[i];
        }
    },
    4000
)