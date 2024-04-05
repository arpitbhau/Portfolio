// JAI SHREE RAM

function log(data) {
    console.log(data)
}

function marqueeAnimation() {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 0, // Remove autoplay delay
        },
        speed: 30000, // Set a very large speed for continuous scrolling
        slidesPerView: 'auto', // Set slides per view to auto
        spaceBetween: -10, // No space between slides
        grabCursor: true, // Show grab cursor on hover
    });

}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })()
}

function ChangeBgColor() {
    if (document.querySelector("main").classList[0] !== "hidden") {
        document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e , 
                start: "top 50%" ,
                end: "bottom 50%" ,
                onEnter: function () {
                    document.body.setAttribute("theme" , e.dataset.bg)
                } ,
                onEnterBack: function () {
                    document.body.setAttribute("theme" , e.dataset.bg)
                }
                
            })
        })
    }

}

function HeroScrollAnimation() {

    gsap.set(".aboutHeading h2" , {yPercent:-10 , xPercent:-1})
    
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".heroContainer" ,
            start: "top top" , 
            end: "bottom bottom" , 
            scrub: 2 ,
        }
    })

    tl.to(".heroTop" , {
        '--clip': '0%' , 
        ease: Power4
    } , 'a')

    gsap.set(".aboutHeading h2" , {scale: 55})

    tl.to(".aboutHeading h2" , {
        scale: 1 ,
        ease: Power4
    } , 'a')



}

function aboutHeadingAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about" , 
            start: "top 60%" , 
            end: "top 30%" ,
            scrub: 2,
        }
    })
    
    tl.to(".aboutHeading" , {
        top: "40%" ,
        ease: Power4 ,
    })
    
    tl.to(".aboutHeading h2" , {
        borderBottom: "2px solid var(--lwhite)"
    })
    
    tl.to(".aboutHeading" , {
        duration: 0 , 
    })

    tl.to(".aboutHeading h2" , {
        width: "90%" ,
    })
    
    



}

function waveTextAnimation() {

    let div = document.querySelectorAll(".waveText")
    let tl  = gsap.timeline()
    let clutter = ``
    let animating = false

    div.forEach(function (elem) {

        elem.textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span style="position:relative;">&nbsp;</span>`
            clutter += `<span style="position:relative;">${e}</span>`
        })
    
        elem.innerHTML = clutter
        clutter = ``
    
    
        elem.addEventListener("mouseenter" , function (e) {


            if (!animating) {
                animating = true
                tl.to(`#${e.target.id} span` , {
                    top: "100%" ,
                    duration: 0 
                })
                tl.to(`#${e.target.id} span` , {
                    delay: .1 ,
                    top: -10 ,
                    stagger: .05 , 
                    ease: Power4 , 
                    duration: .01
                })    
                tl.to(`#${e.target.id} span` , {
                    top: 0 ,
                    stagger: .05 , 
                    ease: Power4 ,
                    duration: .1 ,
                    onComplete: function () {
                        animating = false
                    }
                })   
            }



        })
    
    

    })    



}

function loader() {

    let tl = gsap.timeline()
    
    window.addEventListener("load" , function () {
        
        tl.to(".loader" , {
            opacity: 0 , 
            duration: .5 , 
            ease: Power4
        })

        tl.set(".loader" , {display: "none"})
        tl.set("main" , {opacity: 0 , display: "block"})

        tl.to("main" , {
            opacity: 1 , 
            ease: Power4 ,
            duration: .7 ,
            onComplete: function () {
                document.querySelector("main").classList.remove("hidden");
                document.querySelector("main").classList.add("relative");
                ChangeBgColor()
                aboutHeadingAnimation()
                HeroScrollAnimation()
            }
        })
        


    })




}


loader()
loco()
marqueeAnimation()
waveTextAnimation()