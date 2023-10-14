let barElem = document.querySelector(".fa-bars")
let wrapper = document.querySelector(".wrapper")
let slideList = document.querySelectorAll(".slide")
let nextBtn = document.querySelector(".fa-angle-right")
let prevBtn = document.querySelector(".fa-angle-left")
let picslide = document.querySelectorAll(".zero")
let imgSrc = document.querySelector(".ZERO")
let picslide1 = document.querySelectorAll(".one")
let imgSrc1 = document.querySelector(".ONE")
let picslide2 = document.querySelectorAll(".two")
let imgSrc2 = document.querySelector(".TWO")

let i = 0;


barElem.addEventListener("click", (e)=> {
    e.preventDefault();
    barElem.classList.toggle('fa-xmark')
    wrapper.classList.toggle('active')
});






nextBtn.addEventListener('click', ()=> {
    let activeSlide = document.querySelector(".Active")
    let activeIndex;
    console.log(activeIndex)

    for (var i =0 ; i<slideList.length; i++) {
        if (slideList[i] == activeSlide) {
            activeIndex = i
            activeIndex += 1;
            if (activeIndex < slideList.length){
                slideList[i].classList.remove('Active')
                slideList[activeIndex].classList.toggle("Active")
            } else {
                let activeIndex = Array.from(slideList).indexOf(activeSlide);
                slideList[activeIndex].classList.remove('Active')
                slideList[0].classList.toggle("Active")
            }
            
        }
    }
})
prevBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    let activeSlide = document.querySelector(".Active")
    let activeIndex;
    console.log(slideList.length-1)

    for (var i =0 ; i<slideList.length; i++) {
        if (slideList[i] == activeSlide) {
            activeIndex = i
            activeIndex -= 1;
            if (activeIndex >= 0){
                slideList[i].classList.remove('Active')
                slideList[activeIndex].classList.toggle("Active")
            } else {
                let activeIndex = Array.from(slideList).indexOf(activeSlide);
                slideList[activeIndex].classList.remove('Active')
                slideList[slideList.length-1].classList.toggle("Active")
            }
            
        }
    }
})




picslide.forEach((element)=> {
    element.addEventListener("click", (e)=> {
        e.preventDefault();
        let Src = element.getAttribute('data-src');
        imgSrc.src = Src;
        
    })
})
picslide1.forEach((element)=> {
    element.addEventListener("click", (e)=> {
        e.preventDefault();
        let Src = element.getAttribute('data-src');
        imgSrc1.src = Src;
        
    })
})
picslide2.forEach((element)=> {
    element.addEventListener("click", (e)=> {
        e.preventDefault();
        let Src = element.getAttribute('data-src');
        imgSrc2.src = Src;
        
    })
})
