$(document).foundation({
  orbit: {
	animation: 'slide',
	timer_speed: 2000,
	animation_speed: 500,
	navigation_arrows: true,
	swipe: true,
	pause_on_hover: false,
	bullets: true
  }
});
init();

var constant = 45;
$("#homeButton").click(function() {
	$('html, body').animate({
		scrollTop: $("#top").offset().top -constant
	}, 2000);
});

$("#descriptionButton").click(function() {
	$('html, body').animate({
		scrollTop: $("#sectionOne").offset().top-constant
	}, 2000);
});

$("#learnButton").click(function() {
	$('html, body').animate({
		scrollTop: $("#sectionTwo").offset().top-constant
	}, 2000);
});

$("#contactButton").click(function() {
	$('html, body').animate({
		scrollTop: $(document).height()
	}, 2000);
});

$(window).scroll(function(){

	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".ic").removeClass("padding-on-my-header");
		$('#logo').css("font-size", "16px");
		$('#activeSlot').css("font-size", "16px");
		$('#menu').css("font-size", "16px");
	}
	if (scroll < 50) {
		$('#logo').css('font-size', '30px')
		$(".ic").addClass("padding-on-my-header");
		$('#activeSlot').css("font-size", "30px");
		$('#menu').css("font-size", "30px");

	}

	if ($(window).scrollTop() > $('#sectionThree').offset().top - constant -10 || $(window).scrollTop() + $(window).height() == $(document).height()) {
		document.getElementById("contactId").setAttribute("class", "active");
		document.getElementById("homeId").removeAttribute("class");
		document.getElementById("descriptionId").removeAttribute("class");
		document.getElementById("learnId").removeAttribute("class");
		$("#activeSlot").text('Contact');
	}
	else if ($(window).scrollTop() > $('#sectionTwo').offset().top - constant -10) {
		document.getElementById("learnId").setAttribute("class", "active");
		document.getElementById("homeId").removeAttribute("class");
		document.getElementById("descriptionId").removeAttribute("class");
		document.getElementById("contactId").removeAttribute("class");

		$("#activeSlot").text('Learn');

	}
	else if ($(window).scrollTop() > $('#sectionOne').offset().top - constant - 10) {
		document.getElementById("descriptionId").setAttribute("class", "active");
		document.getElementById("homeId").removeAttribute("class");
		document.getElementById("learnId").removeAttribute("class");
		document.getElementById("contactId").removeAttribute("class");

		$("#activeSlot").text('Description');

	}
	else {
		document.getElementById("homeId").setAttribute("class", "active");
		document.getElementById("descriptionId").removeAttribute("class");
		document.getElementById("learnId").removeAttribute("class");
		document.getElementById("contactId").removeAttribute("class");

		$("#activeSlot").text('Home');

	}
	
});

function init(){
	$(".ic").addClass("padding-on-my-header");
	$('#activeSlot').css("font-size", "30px");
	$('#menu').css("font-size", "30px");
}