var winWidth = $(window).width();
var winHgt = $(window).height();
$(document).ready(function() {
    $('#preloader').fadeOut();
    var getHref = "";
$(document).on('click', '.outsideLink', function () {getHref = $(this).attr('href');$('.overlay, .external_popup').fadeIn('fast');return false;});
$('.proceed_btn').click(function(){window.open(getHref, '_top');$('.overlay, .external_popup').fadeOut('fast');return true;});
$('.close, .cancel').click(function(){$('.overlay, .external_popup').fadeOut('fast');});
});