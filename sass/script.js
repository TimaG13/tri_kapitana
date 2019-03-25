$(document).ready(function() {
    // scroll
    $(window).scroll(function() {
        var the_top = $(document).scrollTop();
        if (the_top > 10) {
            $('.top_mnu').removeClass('hied');
        }
        if (the_top > 200) {
            $('.top_mnu').removeClass('container');
            $('.top_mnu').addClass('fixed container-fluid');
        }
        else {
            $('.top_mnu').removeClass('fixed container-fluid hied');
            $('.top_mnu').addClass('container');
        }
    });
});
//////////////
