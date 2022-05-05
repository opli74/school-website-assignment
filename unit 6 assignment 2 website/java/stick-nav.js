
$window = $(window);
$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position >= (window.innerHeight * 0.3)) { 
        $('.nav').addClass('sticky');
        $('.nav-bar').addClass('nav-links-scrolled');
        header_height = $('.nav').innerHeight();
        $('body').css('padding-top' , header_height);
    } else {
        $('body').css('padding-top' , '0');
        $('.nav').removeClass('sticky');
        $('.nav-bar').removeClass('nav-links-scrolled');
    }
 });


