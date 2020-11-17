jQuery(document).ready(function ($) {
	//  loder js ---------------

$(window).on("load", function () {
	$("#loader").fadeOut(1000);
});
//  sticky nav js ---------------
window.onscroll = function () {
	stickyfunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyfunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
//  r snav ---------------
$(".togglemanue").click(function () {
	$(".togglemanue").toggleClass("tactive");
	$("nav").toggleClass("nactive");
});
$('.homeslider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  });

//ddmenue-----------
$(".dbtn").click(function () {
	$(".subnav").toggleClass("ddm");
});
//Member section---- slider 
$('.client-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
		     slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//scroll spy------------
$(".scrollspy").scrollWatchMapTo(".navbarul > li");

//---counter up--

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

//wow---------------
new WOW().init();

//Lightbox----------------
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'disableScrolling': true,
  'fitImagesInViewport': true
});
//mixitup-----------------------
var mixer = mixitup('.mix-con');
});

