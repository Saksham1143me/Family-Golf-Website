gsap.to(".nav",{
backgroundColor:"black",
duration:0.8,
delay:0.8,
height:"60px",
scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -12%",
    scrub:1.7
}
})
gsap.to(".main",{
backgroundColor:"black",
scrollTrigger:{
trigger:".main",
scroller:"body",
// markers:true,
start:"top -30%",
end:"top -90%",
scrub:3
}
})
var crsr=document.querySelector(".cursor")
var blurr=document.querySelector(".cursorblur")
document.querySelector(".main").addEventListener("mousemove",(dets)=>{
crsr.style.left=dets.x+"px"
crsr.style.top=dets.y+"px"
blurr.style.top=dets.y -120+"px"
blurr.style.left=dets.x -120+"px"
}
)
// dets is a property of mouse movement;
gsap.to(".scrolltxt",{
    zIndex:9,
    scrollTrigger:{
    trigger:".scrolltxt",
    scroller:"body",
    // markers:true,
    start:"top +10%",
    end:"bottom +40%",
    scrub:1
    }
    })
    gsap.to(".afterabout div",{
        zIndex:1,
        color:"white",
        scrollTrigger:{
        trigger:".afterabout div",
        scroller:"body",
        // markers:true,
        start:"top +15%",
        end:"top +40%",
        scrub:1
        }
        })
var tl=gsap.timeline()
tl.from(".logo,.nav h4,.head h1,.head h2,.head div",{
y:-120,
duration:0.7,
delay:0.1,
stagger:0.2,
opacity:0
})
gsap.from(".afterabout div",{
    scale:0.5,
    opacity:0,
    scrollTrigger:{
    trigger:".afterabout div",
    scroller:"body",
    // markers:true,
    start:"top +40%",
    end:"bottom -30%",
    }
    })
tl.from(".scrolldown",{
scale:0,
opacity:0,
})
gsap.from(".scrolldown",{
    y:20,
    yoyo:true,
    repeat:-1,
    duration:0.5
})
gsap.to(".scrolldown",{
    scrollTrigger:{
    trigger:".scrolldown",
    scroller:"body",
    // markers:true,
    start:"top +110%",
    end:"bottom +10%",
    scrub:1
    }
    })
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector(".page2"),
//         smooth: true
//     });
//     function loco(){
//         gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".paeg2", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".paeg2").style.transform ? "transform" : "fixed"
// });


// // // --- RED PANEL ---
// // gsap.from(".line-1", {
// //   scrollTrigger: {
// //     trigger: ".line-1",
// //     scroller: ".paeg2",
// //     scrub: true,
// //     start: "top bottom",
// //     end: "top top",
// //     onUpdate: self => console.log(self.direction)
// //   },
// //   scaleX: 0,
// //   transformOrigin: "left center", 
// //   ease: "none"
// // });


// // // --- ORANGE PANEL ---
// // gsap.from(".line-2", {
// //   scrollTrigger: {
// //     trigger: ".orange",
// //     scroller: "body",
// //     scrub: true,
// //     pin: true,
// //     start: "top top",
// //     end: "+=100%"
// //   },
// //   scaleX: 0, 
// //   transformOrigin: "left center", 
// //   ease: "none"
// // });


// // // --- PURPLE/GREEN PANEL ---
// // var tl = gsap.timeline({
// //     scrollTrigger: {
// //       trigger: ".purple",
// //       scroller: "body",
// //       scrub: true,
// //       pin: true,
// //       start: "top top",
// //       end: "+=100%"
// //     }
// //   });

// // tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
// //   .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
// //   .to(".purple", {backgroundColor: "#28a92b"}, 0);



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//     }

//     var newtext1=""
//     var data1=document.querySelector(".about span p").textContent
//     var word1=data1.split(" ")
//     word1.forEach((t)=>{
// newtext1=newtext1+`<span>${t}</span>`
// document.querySelector(".about span p").innerHTML=newtext1
//     })
//     gsap.to(".about p span",{
//         color:white,
//         stagger:0.5,
//         scrollTrigger:{
//             trigger:".about p span",
//             scroller:"body",
//             start:"top top",
//             markers:true,
//             end:"bottom top",
//             scrub:0.3,
//         }
//     })