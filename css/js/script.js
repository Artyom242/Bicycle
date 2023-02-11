let sliderImages = document.querySelectorAll("#slider_container h2 p");
let i = 0;


function sliderLeft() {
    ++i;
    if (i >= sliderImages.length) {
        sliderImages[i - 1].classList.remove('activ');
        i = 0;
        sliderImages[i].classList.add('activ');
    } else {
        sliderImages[i - 1].classList.remove('activ');
        sliderImages[i].classList.add('activ');
    }

    console.log(myArr);
}