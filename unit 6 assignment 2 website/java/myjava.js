


// -------------------------------------
// -- For animating the span on hover --
// -------------------------------------

jQuery('span','.span-animate').mouseenter(function() {
    jQuery(this).addClass('animation')
})

jQuery('span','.para-3').hover(function() {
    jQuery(this).addClass('emoji-anim')
})


jQuery('span','.span-animate','.image').on('animationend', function() {
jQuery(this).removeClass('animation')
})

jQuery('span','.para-3').on('animationend', function() {
    jQuery(this).removeClass('emoji-anim')
})

// $("a",".nav-bar").click(function(){
//     document.querySelector('body').style.opacity = 1
// });
