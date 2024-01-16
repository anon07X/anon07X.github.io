
document.addEventListener("DOMContentLoaded", function() {
   
    console.log("Sayfa yüklendi!");
  });


  $('.carousel').carousel({
    pause: 'hover'
  });

  function toggleMenu() {
    var menu = document.getElementById("myMenu");
    var overlay = document.getElementById("overlay");
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      overlay.style.display = "block";
    } else {
      menu.style.display = "none";
      overlay.style.display = "none";
    }
  }
  
  function menuAcildigindaHeaderBoyutuDegistir() {
    var header = document.querySelector('header');
    header.style.height = '100px';
  }
  
  
  