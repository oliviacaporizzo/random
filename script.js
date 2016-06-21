$(document).ready(function() {
	console.log($(window).scrollTop());
	var distance = 100;
	var $window = $(window);
	$window.scroll(function(){
		if($window.scrollTop() >= distance){
			$('.ele').fadeIn('slow');
		}else {
			$('.ele').fadeOut('slow');
		}

		if ($(window).scrollTop() >= 1045) {
			console.log(mail.getStatus());
			mag.play();
		}
		if($(window).scrollTop() >= 1630 || $(window).scrollTop() < 1045) {
			mag.reset();
			mag.stop();
		}
		if($(window).scrollTop() >= 440) {
			target.play();
		}
		if($(window).scrollTop() > 1022 || $(window).scrollTop() == 0) {
			target.reset();
			target.stop();
		}
		if($(window).scrollTop() > 1650) {
			mail.play();
		} else {
			mail.reset();
			mail.stop();
		}
	});

	$('li button').mouseover(function(){
		$(this).css("background-color", "#416F7F");
	});

	$('li button').mouseout(function(){
		$(this).css("background-color", "#114B5F");
	});

	$('li button').click(function() {
		var $class = $(this).text();
		//$('.ele').fadeIn('fast');
		$(this).css("background-color", "#114B5F");
		if($class == "Mission") {
			$(window).scrollTo("#1", "100000");
		} else if($class == "Contact Us") {
			$(window).scrollTo("#2", "300000");
		} else if($class == "Resources") {
			$(window).scrollTo("#3", "200000");
		}
		
	});

	var elevator = new Elevator({
		duration: 3000
	});

	$('.ele button').click(function(){
		elevator.elevate();
	});

	$('.ele button').mouseover(function() {
		$('.ele button').css("background-color", "white");
	});

	$('.ele button').mouseout(function() {
		$('.ele button').css("background-color", "#e9e9e9");
	});

	$('.navbar_offset p a').mouseover(function() {
		$('.navbar_offset p').css("opacity", "1.0");
	});

	$('.navbar_offset p a').mouseout(function() { 
		$('.navbar_offset p').css("opacity", ".5");
	});

	$('#first').click(function() {
		$(window).scrollTo("#1", "100000");
	});

	$('#second').click(function() {
		$(window).scrollTo("#2", "100000");
	});

	$('#third').click(function() {
		$(window).scrollTo("#3", "100000");
	});

	var mail = new Vivus('mail', {duration: 170, type: 'delayed', start: 'manual'});
	var target = new Vivus('target', {duration: 170, type: 'delayed', start: 'manual'});
	var mag = new Vivus('mag', {duration: 170, type: 'delayed', start: 'manual'});
	var triangles = new Vivus('triangles', {duration: 200, type: 'async', start: 'manual'});
	triangles.play();

})