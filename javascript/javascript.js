$(document).ready(function(){
  $(".blog-carousel").owlCarousel({
    loop:true,
    nav: true,
    dot:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
  $(".banner-carousel").owlCarousel({
    loop:true,
    dot:false,
    nav: false,
    margin: 5,
    autoHeight : true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:2
      }
    }
  });
});
