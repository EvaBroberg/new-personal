$(document).ready(function(){
    // Populate images from data attributes.
    $('.parallax').each(function(index) {
        var imageSrc = $(this).data('image-src')
        var imageHeight = $(this).data('height')
        $(this).css('background-image','url(' + imageSrc + ')')
        $(this).css('height', imageHeight)
    })
})

//CONTACT FORM SUBMISSION

$('.form-wrapper button.submit').click(function(e){
    // prevent default submit
    e.preventDefault();
});

//PROGRESS BARS