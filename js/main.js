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
let carouselCont = document.querySelectorAll('.slide');
let container =  document.querySelector ('.container');
let leftBtn = document.querySelector('.carousel-button-l');
let rightBtn = document.querySelector('.carousel-button-r');
let currentI = 0;

//function to clear out all images 
function reset (){

  for(let i= 0; i < carouselCont.length; i++){
    //hidding all images
    carouselCont[i].style.display = 'none';
  }
}

//function to inicial image
function startSlide(){
  reset();
  //Grag first image
  carouselCont[0].style.display = 'block';  
}

//Adding functionality to arrows

//previous image
function slideLeft(){
  reset();
  //take 1 from current image and show 
  carouselCont[currentI - 1].style.display = 'block';
  //decreasing current value by 1
  currentI--;
}

//left buttom
leftBtn.addEventListener('click', e  => {
  //if in 0, we are on the first image
   if(currentI === 0 ){
    currentI = carouselCont.length;
  } 
   slideLeft()
 
 });
   startSlide();

//next image
function slideRight(){
  reset();
  carouselCont[currentI + 1].style.display = 'block';
  //increasing current by 1
  currentI++;
}

//right buttom
rightBtn.addEventListener('click', e => {
  //to go back to first image
   if(currentI === carouselCont.length - 1){
    currentI = -1;
  } 
   slideRight();
 
 });










