$(document).ready(function(){
$('.banner-background-images').slick({
    dots: false,
    infinite: true,
    autoplay:false,
    pauseonhover: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //smooth js
  $('.list').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });


  // loud-section slider
  $('.loud-slider-images').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    autoplay:true,
    pauseonhover: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  //teletype js
   $( '.smart' ).teletype( {
   text: [ 'clear', 'loud', 'noiseless' ],
   typeDelay: 0,
   backDelay: 10
  } );

  //Sticky-navbar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200){  
        $('body').addClass("sticky");
      }
      else{
        $('body').removeClass("sticky");
      }
    });

     //mobile-menu
  $(".menubtn").click(function() {
    $('.menuholder').addClass("menuholderadd");
});
  $(".cross").click(function() {
    $('.menuholder').removeClass("menuholderadd");
});

  $(".hashchild .newadd").click(function() {
    $(this).parents('.hashchild').children('.submenu').slideToggle();
});

})

//accordian js
//this is the button
var acc = document.getElementsByClassName("course-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  //when one of the buttons are clicked run this function
  acc[i].onclick = function() {
  //variables
  var panel = this.nextElementSibling;
  var coursePanel = document.getElementsByClassName("course-panel");
  var courseAccordion = document.getElementsByClassName("course-accordion");
  var courseAccordionActive = document.getElementsByClassName("course-accordion active");

  /*if pannel is already open - minimize*/
  if (panel.style.maxHeight){
    //minifies current pannel if already open
    panel.style.maxHeight = null;
    //removes the 'active' class as toggle didnt work on browsers minus chrome
    this.classList.remove("active");
  } else { //pannel isnt open...
    //goes through the buttons and removes the 'active' css (+ and -)
    for (var ii = 0; ii < courseAccordionActive.length; ii++) {
      courseAccordionActive[ii].classList.remove("active");
    }
    //Goes through and removes 'activ' from the css, also minifies any 'panels' that might be open
    for (var iii = 0; iii < coursePanel.length; iii++) {
      this.classList.remove("active");
      coursePanel[iii].style.maxHeight = null;
    }
    //opens the specified pannel
    panel.style.maxHeight = panel.scrollHeight + "px";
    //adds the 'active' addition to the css.
    this.classList.add("active");
  } 
  }//closing to the acc onclick function
}//closing to the for loop.

//counter js
$(window).on("load resize",function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 4);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
  //parallax//
$('.parallax').parallax({imageSrc:"images/img/parallex1.jpg"})

//wow
new WOW().init();

//scroll-top
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//autotype
// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 300 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('txt-rotate');
//   for (var i=0; i<elements.length; i++) {
//     var toRotate = elements[i].getAttribute('data-rotate');
//     var period = elements[i].getAttribute('data-period');
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//   document.body.appendChild(css);
// };
});

