$(function() {
   $('.flash').delay(500).fadeIn('normal', function() {
      $(this).delay(1000).fadeOut();
   });
});

$('.header').click(function() {
	$(this).fadeOut();	
});

$('.listcard').hover(function() {
	$(this).toggleClass('pink');
	$(this).toggleClass('teal');
});