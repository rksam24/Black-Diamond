'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<a class="navbar-brand" href="index.html"><img src="assets/images/YM.png" width="100px"> </a>
<div class="hamburger_wrapper navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 

  <div id="js-hamburger" class="hamburger">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

</div>

<div class="collapse navbar-collapse " id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto" id = "navbar-content">
   <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
   <li class="nav-item"><a class="nav-link" href="About_us.html">About</a></li>
   <li class="nav-item"><a class="nav-link" href="Academy.html">Academics</a></li>
   <li class="nav-item"><a class="nav-link" href="contact_us.html">Contact</a></li>
   <li class="nav-item"><a class="nav-link" href="Developer_Team.html">Developer Team</a></li>
  </ul>
</div>
</nav>`);





// Window Loads
$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
  
//toggler hamburger functions
    const menuBtn = document.querySelector('.navbar-toggler');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true;
      }
      else{
        menuBtn.classList.remove('open');
        menuOpen = false;
      }
  });

});

// function for toggling hamburger is-active class
$(function(){
  
  $("#js-hamburger").on("click", function(){
    $(this).toggleClass('is-active');
  });

});

// Navbar current page highlight

let loader = document.querySelector('.loader-container');

window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disappear")
}
$(function(){
  $('a.nav-link').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current-link');
    }
  });
});

//function to remove underline on hover

$(document).ready(function(){

  $("a.nav-link").hover(
       function () {
         $(this).removeClass("current-link");
       },
       function () {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current-link');
        }
      }
  );
});
