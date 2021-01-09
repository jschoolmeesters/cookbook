$(document).ready(function(){
	$('#nav-icon3').click(function(){
      $('.content').toggleClass('content--z');
      $(this).toggleClass('open');
      $(this).toggleClass('hover');
      $('.menu').toggleClass('menu--open');
      setTimeout(function(){
         $('.content').toggleClass('content--hidden');
      }, 500);
	});

   $('#nav-icon3').hover(function(){
      if (!$(this).hasClass('open')) {
		   $(this).toggleClass('hover');
      }
	});

   $('.section-home__arrow-down').click(function(){
      $('html, body').animate({
         'scrollTop': $('.section-info').offset().top
      }, 500);
   });
});
