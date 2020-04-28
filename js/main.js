///Progress Bar///
const progressContainer = document.querySelector(".progress-fill");

window.addEventListener("scroll", () => {
  //console.log("scroll down")

  const roomscroll = document.documentElement.scrollHeight - window.innerHeight;

  const totalscroll = window.scrollY;

  let percentageRoomscroll = 100;

  // if user can scroll down
  console.log(roomscroll)
  if (roomscroll > 0) {
    percentageRoomscroll = Math.ceil(totalscroll / roomscroll * 100);
  }


  progressContainer.style.width = `${percentageRoomscroll}%`;
}); 



//SCROLLSPY TO HIGHLIGHT NAV LINKS WHEN SCROLLING

(function() {
 'use strict';

   var section = document.querySelectorAll(".container");
   var section = document.querySelectorAll('.content');
   var sections = {};
   var i = 0;

   Array.prototype.forEach.call(section, function(e) {
     sections[e.id] = e.offsetTop;
   });

window.onscroll = function() {
   var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
   for (i in sections) {
     if (sections[i] <= scrollPosition + 161) {
       document.querySelector('.active').setAttribute('class', '');
       console.log(i);
       //debugger;
       document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
     }
   }
 };
})();


//Carousel





//select carousel, all images and buttoms
let carouselCont = document.querySelector('.carousel-container');
let container =  document.querySelector ('.container');
let leftBtn = document.querySelector('.carousel-button-l');
let rightBtn = document.querySelector('.carousel-button-r');


console.log (leftBtn);

//when I click move image 
  rightBtn.addEventListener('click', e => {
    let currentI = container.querySelector('.current-Image');
    let nextI = currentI.nextElementSibling;
    let iTomove = nextI.style.left;

    console.log(iTomove);



  })









