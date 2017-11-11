$(window).ready(function () {

    $("#menu").hide();
    $('body').mousemove(function (e) {
       if (!$("#menu").is(':visible') && (e.pageX / $('body').width() ) > 0.95){
           $("#menu").show();
       }
    });
});