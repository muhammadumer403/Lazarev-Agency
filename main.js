

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function loadingAnimation(){
    var tl = gsap.timeline()

    tl.from(".page",{

        opacity:0,
        duration:0.2,
        delay:0.2,
        onStart:()=>{
            window.scrollTo(0, 0)

        }
    })
    tl.from(".page",{
        transform : "scaleX(0.7) scaleY(0.2) translateY(-80%)",
        borderRadius:"150px",
        duration:2,
        ease:"expo.out"


    })
    tl.from("nav",{
        opacity:0,
        delay:-0.2
    })
    tl.from(".page h1,.page h3,.page div",{
        opacity:0,
        duration:0.5,
        stagger:0.2,
        onStart:()=>{
            document.body.style.overflow = 'visible'
        }
    })
}
function page1Animation(){
    var rightelem = document.querySelectorAll('.rightelem')

    rightelem.forEach(function(elem){
         elem.addEventListener("mouseenter",function(){
            gsap.to(elem.querySelector("img"),{
                opacity:1,
                scale:1
            })
         })

         elem.addEventListener("mouseleave",function(){
            gsap.to(elem.querySelector("img"),{
                opacity:0,
                scale:0
            })
         })

         elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.querySelector("img"),{
                x:dets.x - elem.getBoundingClientRect().x - 90,
                y:dets.y - elem.getBoundingClientRect().y -215
            })
         })
    })
}

function page2Animation(){
    var playbt = document.querySelector(".playbt")
    var video = document.querySelector(".page2 video")

    playbt.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius: 0
        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0) scaleY(0)",
            opacity:1,
            borderRadius: 0
        })
    })

    var nichyvideo = document.querySelectorAll(".nichyvideo")

    nichyvideo.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            elem.play()
        })
        elem.addEventListener("mouseleave", function(){
            elem.pause()
        })
    })
}

function page3Anim(){
    gsap.from(".btm-abu h4",{
        x:0,
        scrollTrigger:{
            trigger: ".btm-abu",
            scrub:0.25,
            start:'top 80%',
            end:'top 30%'
        }
    })
}
document.querySelectorAll('.one-container').forEach(e=>{
    e.querySelector('.heading').addEventListener('click',()=>{
        e.querySelectorAll('.one').forEach(d=>{
            if(d.classList.contains('hidden')){
                d.classList.remove('hidden')
                d.classList.add('flex')
                return
            }
            d.classList.remove('flex')
            d.classList.add('hidden')

        })
        
    })
})



page3Anim()
loadingAnimation()
page1Animation()
page2Animation();
// hovering()
