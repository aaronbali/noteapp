$(function() {
   $('.notice').delay(500).fadeIn('normal', function() {
      $(this).delay(500).fadeOut();
   });
});

$('.header').click(function() {
	$(this).fadeOut();	
});

$('.listcard').hover(function() {
	$(this).toggleClass('pink');
	$(this).toggleClass('teal');
});