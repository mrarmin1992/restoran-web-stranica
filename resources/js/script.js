
/* --------ANIMACIJA POZADNMSKE SLIKE-----*/

var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});

/* --------FLIP CARD-----*/
var card1 = document.querySelector(".card1");
var playing = false;

card1.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card1,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
var card2 = document.querySelector(".card2");
var playing = false;

card2.addEventListener('click',function() {
  if(playing)
    return;
  
  playing = true;
  anime({
    targets: card2,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});

/* --------HAMBURGER MENU-----*/

function openNavbar() {
  document.querySelector("#navbar").style.width = "30%";
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


class Slider {
  constructor(props) {
    this.rootElement = props.element;
    this.slides = Array.from(
      this.rootElement.querySelectorAll(".slider-list__item")
    );
    this.slidesLength = this.slides.length;
    this.current = 0;
    this.isAnimating = false;
    this.direction = 1; // -1
    this.baseAnimeSettings = {
      duration: 750,
      elasticity: 0,
      easing: 'easeInOutCirc'
    };
    this.navBar = this.rootElement.querySelector(".slider__nav-bar");
    this.thumbs = Array.from(this.rootElement.querySelectorAll(".nav-control"));
    this.prevButton = this.rootElement.querySelector(".slider__arrow_prev");
    this.nextButton = this.rootElement.querySelector(".slider__arrow_next");

    this.slides[this.current].classList.add("slider-list__item_active");
    this.thumbs[this.current].classList.add("nav-control_active");

    this._bindEvents();
  }

  goTo(index, dir) {
    if (this.isAnimating) return;
    var self = this;
    let prevSlide = this.slides[this.current];
    let nextSlide = this.slides[index];
    
    self.isAnimating = true;
    self.current = index;
    nextSlide.classList.add("slider-list__item_active");

    anime(Object.assign({}, self.baseAnimeSettings, { 
      targets: nextSlide,
      translateX: [100 * dir + '%', 0]
    }));
    
    anime(Object.assign({}, self.baseAnimeSettings, {
      targets: prevSlide,
      translateX: [ 0, -100 * dir + '%'],
      complete: function(anim) {
        self.isAnimating = false;
        prevSlide.classList.remove("slider-list__item_active");
        self.thumbs.forEach((item, index) => {
          var action = index === self.current ? "add" : "remove";
          item.classList[action]("nav-control_active");
        });
      }
    }))
  }
  
  goStep(dir) {
    let index = this.current + dir;
    let len = this.slidesLength;
    let currentIndex = (index + len) % len;
    this.goTo(currentIndex, dir);
  }

  goNext() {
    this.goStep(1);
  }

  goPrev() {
    this.goStep(-1);
  }

  _navClickHandler(e) {
    var self = this;
    if (self.isAnimating) return;    
    let target = e.target.closest(".nav-control");
    if (!target) return;    
    let index = self.thumbs.indexOf(target);
    if (index === self.current) return;
    let direction = index > self.current ? 1 : -1;
    self.goTo(index, direction);
  }

  _bindEvents() {
    var self = this;
    ["goNext", "goPrev", "_navClickHandler"].forEach(method => {
      self[method] = self[method].bind(self);
    });
    self.nextButton.addEventListener("click", self.goNext);
    self.prevButton.addEventListener("click", self.goPrev);
    self.navBar.addEventListener("click", self._navClickHandler);
  }
}

// ===== init ======
let slider = new Slider({
  element: document.querySelector(".slider")
});







function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
document.querySelector('.cont_form_login').style.display = "block";
document.querySelector('.cont_form_sign_up').style.opacity = "0";               

setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
  
setTimeout(function(){    
document.querySelector('.cont_form_sign_up').style.display = "none";
},200);  
  }

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
document.querySelector('.cont_form_login').style.opacity = "0";
  
setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
},100);  

setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
},400);  


}    



function ocultar_login_sign_up() {

document.querySelector('.cont_forms').className = "cont_forms";  
document.querySelector('.cont_form_sign_up').style.opacity = "0";               
document.querySelector('.cont_form_login').style.opacity = "0"; 

setTimeout(function(){
document.querySelector('.cont_form_sign_up').style.display = "none";
document.querySelector('.cont_form_login').style.display = "none";
},500);  
  
  }


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

 $('.js--dugme6').click(function() {
        $('html, body').animate({scrollTop: $('.').offset().top}, 1000);
    });
$('.js--dugme7').click(function() {
        $('html, body').animate({scrollTop: $('.js--onama').offset().top}, 1000);
    });
$('.js--dugme8').click(function() {
        $('html, body').animate({scrollTop: $('.js--onama').offset().top}, 1000);
    });
$('.js--dugme9').click(function() {
        $('html, body').animate({scrollTop: $('.js--kontakt').offset().top}, 1000);
    });

/*-------ANIMACIJE-------*/

 $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');      
    }, {
        offset:'50%'
    });

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});





$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




