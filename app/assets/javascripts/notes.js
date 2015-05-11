$(document).on('ready page:load', function () {
  $(function() {
   $('.flash').delay(500).fadeIn('normal', function() {
      $(this).delay(500).fadeOut('slow');
   });
});

$('.header').click(function() {
	$(this).fadeOut();	
});

$('.listcard').hover(function() {
	$(this).toggleClass('pink');
	$(this).toggleClass('teal');
});

$('.navlink a').hover(function() {
	$(this).toggleClass('lime-text text-accent-3');
});

});