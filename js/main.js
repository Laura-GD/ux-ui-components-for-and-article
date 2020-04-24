
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
      if (sections[i] <= scrollPosition + 160) {
        document.querySelector('.active').setAttribute('class', '');
        console.log(i);
        debugger;
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();


/*
////CARROUSEL////
rollBtn.addEventListener (`click`, (event) => {

  document.querySelector(`.carousel`).style.display = ("block");

})  

var randomNum = 1;

document.querySelector(`.carousel_container`).innerHTML = (`<img id="carousel_slide${randomNum}" class="carousel-image" src="img/beignet1.jpg" alt="beignet${randomNum}">
`);

document.getElementById('carousel-button-l').addEventListener('click', function() {
if ( randomNum !== 6 ) {
  randomNum++;
  document.querySelector(`.carousel_container`).innerHTML = (`<img id="carousel_slide${randomNum}" class="carousel-image" src="img/arrow-left.png" alt="beignet${randomNum}">
`);
}
})


document.getElementById('carousel-button-r').addEventListener('click', function() {
if ( randomNum !== 1 ) {
  randomNum--;
  document.querySelector(`.carousel_container`).innerHTML = (`<img id="carousel_slide${randomNum}" class="carousel-image" src="img/arrow-right.png" alt="beignet${randomNum}">
`);
}

})


////INFINITE SCROLLING//////
  

let winH = document.documentElement.clientHeight
    let docH = document.documentElement.scrollHeight
    let winY = window.scrollY
    let maxY = docH - winH
  
    if (winY >= maxY) {
      // You have definitely hit the bottom
  
      // Add new content when we hit the bottom
      document.querySelector('.content').innerHTML += `
    <article class="content" id="beignets">
      <h1>BEIGNETS</h1>
            <p>
                The word beignet (pronounced ben-YAY) comes from the early Celtic word bigne meaning “to raise.”  It is also French for “fritter.” Beignets, a New Orleans specialty, are fried, raised pieces of yeast dough, usually about 2 inches in diameter or 2 inches square.  After being fried, they are sprinkled with sugar or coated with various icings.

                Beignets have been associated with Mardi Gras in France since at least the 16th century, and many recipes for beignets appear in French works around the same time.
            </p>
      </article>
        `
    }
  window.addEventListener('load', theStateOfTheInterface)
  window.addEventListener('scroll', theStateOfTheInterface)
  window.addEventListener('resize', theStateOfTheInterface)
  */



  