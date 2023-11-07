gsap.to(".circle", {
    rotate : 0,
    duration: 2,
    ease: Expo.easeInOut,
})

let active = 3;
// let sec = 2;
const mncircle = document.querySelectorAll(".mncircle")
const second = document.querySelectorAll(".second")
console.log(second[active])

gsap.to(mncircle[active - 1], {
    opacity: .7,
})

gsap.to(second[active - 1],{
    opacity: 1,
})

mncircle.forEach((val,index) => {
    val.addEventListener("click", function () {
        gsap.to(".circle", {
            rotate : (3 - (index + 1)) * 10,
            ease:Expo.easeInOut,
            duration:1,
        })
        grayOut()
        gsap.to(this, {
            opacity : .7,
        })
        gsap.to(second[index], {
            opacity : 1,
        })
    })
})


function grayOut (){
    gsap.to(mncircle,{
        opacity : .2
    })
    gsap.to(second,{
        opacity : .4
    })
}