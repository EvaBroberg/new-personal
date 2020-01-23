$(document).ready(function(){
    // Populate images from data attributes.
    $('.parallax').each(function(index) {
        var imageSrc = $(this).data('image-src')
        var imageHeight = $(this).data('height')
        $(this).css('background-image','url(' + imageSrc + ')')
        $(this).css('height', imageHeight)
    })
});

//CONTACT FORM SUBMISSION

$('.form-wrapper button.submit').click(function(e){
    // prevent default submit
    e.preventDefault();
});

//scale parallx

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom img").css({
		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/10)/100+')',
	});
});

//scroller

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-section").offset().top
    }, 2000);
    return false;
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#work-section").offset().top
    }, 2000);
    return false;
});

$("#resume").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume-section").offset().top
    }, 2000);
    return false;
});

$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 2000);
    return false;
});
