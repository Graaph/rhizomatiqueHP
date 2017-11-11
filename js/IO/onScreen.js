$(window).ready(function () {

    let timeout;
    $(document).on('mousemove', function (event) {
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(function () {
            // trigger the new event on event.target, so that it can bubble appropriately
            $(event.target).trigger('mousemoveend');
        }, 300);
    });

    $("#menu").hide();


    $('body').mousemove(function (e) {
        $(".playing-image").show();

        if (!$("#menu").is(':visible') && (e.pageX / $('body').width() ) > 0.95){
           $("#menu").show();
        }
    });

    $('body').on("mousemoveend",function (e) {
        $(".playing-image").hide();
    });

    $('#menu-close').click(function () {
        $("#menu").hide();

    })
});

