document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const openModalBtnFooter = document.getElementById('openModalBtnFooter');
    const closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn?.addEventListener('click', function() {
        modal.classList.remove('hidden', 'fade-out');
        modal.classList.add('fade-in');
    });
    openModalBtnFooter?.addEventListener('click', function() {
      modal.classList.remove('hidden', 'fade-out');
      modal.classList.add('fade-in');
  });

    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('fade-in');
        modal.classList.add('fade-out');
        modal.addEventListener('animationend', function() {
            if (modal.classList.contains('fade-out')) {
                modal.classList.add('hidden');
            }
        }, { once: true });
    });
});

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const showAnim = gsap.from('.main-tool-bar', { 
yPercent: -100,
paused: true,
duration: 0.2
}).progress(1);

ScrollTrigger.create({
start: "top top",
end: "max",
onUpdate: (self) => {
self.direction === -1 ? showAnim.play() : showAnim.reverse()
}
});
gsap.to(".asdasd",{
scrollTrigger:{
    trigger:".asdasd",
    start:"top center",
    end:"top 100px",
    scrub:true,
},
x:-100,
rotation:360,
ease:"none"
})



function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.25, 
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  



    // search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}











   
$("body").on("click", ".refressh1", function (e) {
    
  $(".captcha-sefaresh").load("/captcha.bc");
  return false;
  });
 

 
$(document).ready(function(){
window.onload = function () {
setTimeout(function () {
$(".Contact-2 input").focusin(function(){
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";
});

$(".Contact-2 input").focusout(function(){
if($(this).val()){

$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";

}else{
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="block";

}
});

$(".Contact-3 input").focusin(function(){
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";
});
$(".Contact-3 input").focusout(function(){
if($(this).val()){

$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";

}else{
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="block";

}
});

$(".Contact-1 input").focusin(function(){
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";
});

$(".Contact-1 input").focusout(function(){
if($(this).val()){

$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";

}else{
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="block";

}
});



$(".Contact-4 textarea").focusin(function(){
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";
});
$(".Contact-4 textarea").focusout(function(){
if($(this).val()){

$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="none";

}else{
$(this).parents()[5].querySelector("div[data-bc-title-container]").style.display="block";

}
});





}, 1000); 
};



});
 

