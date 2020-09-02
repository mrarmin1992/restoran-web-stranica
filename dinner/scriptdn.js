
/*--------OPIS ANIMACIJA--------*/

$('.first').on('click', function() {
      $(this).toggleClass('show-description');
  });

$('.second').on('click', function() {
      $(this).toggleClass('show-description');
  });

$('.dessert').on('click', function() {
      $(this).toggleClass('show-description');
  });
$('.first1').on('click', function() {
      $(this).toggleClass('show-description');
  });

$('.second1').on('click', function() {
      $(this).toggleClass('show-description');
  });

$('.dessert1').on('click', function() {
      $(this).toggleClass('show-description');
  });
$('.first2').on('click', function() {
      $(this).toggleClass('show-description');
  });

$('.second2').on('click', function() {
      $(this).toggleClass('show-description');
  });

$('.dessert2').on('click', function() {
      $(this).toggleClass('show-description');
  });

/*----ANIMACIJA TEXTA-----*/

$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});


anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });

/* --------HAMBURGER MENU-----*/

function openNavbar() {
  document.querySelector("#navbar").style.width = "20%";
  document.querySelectorAll(".open")[0].style.opacity = 0;
}
function closeNavbar() {
  document.querySelector("#navbar").style.width = "0";
  document.querySelectorAll(".open")[0].style.opacity = 1;
}

   $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');  
    }, {
        offset:'50%'
    });


/*Scroll on buttons*/
    $('.js--dugme1').click(function() {
        $('html, body').animate({scrollTop: $('.js--home').offset().top} , 1000); 
                          });
    $('.js--dugme2').click(function() {
        $('html, body').animate({scrollTop: $('.js--rezervacija').offset().top}, 1000);
    });
    $('.js--dugme3').click(function() {
        $('html, body').animate({scrollTop: $('.js--galerija').offset().top}, 1000);
    });
     $('.js--dugme4').click(function() {
        $('html, body').animate({scrollTop: $('.js--kontakt').offset().top}, 1000);
    });
     $('.js--dugme5').click(function() {
        $('html, body').animate({scrollTop: $('.js--login').offset().top}, 1000);
    });
