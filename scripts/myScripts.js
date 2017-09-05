//-----------------------------------------------------------------------
//Add Auto Padding to Header so that Image fits the Full Screen
//-----------------------------------------------------------------------
$(document).ready(function () {

    "use strict";

    setInterval(function () {

        "use strict";

        var windowHeight = $(window).height();
        var containerHeight = $('.apContent').height();
        var paddingSpace = windowHeight - containerHeight;

        $('.apContent').css({
            'padding-top': Math.round(paddingSpace / 2) + 'px',
            'padding-bottom': Math.round(paddingSpace / 2) + 'px'
        });

    }, 10);

});


//-----------------------------------------------------------------------
//Animation: To Initiate the WOW Animation Method
//-----------------------------------------------------------------------
$(document).ready(function () {

    "use strict";

    new WOW().init();
});


//-----------------------------------------------------------------------
//Adding ScrollSpy functionality to the Navigation Bar
//-----------------------------------------------------------------------
$(document).ready(function () {

    "use Strict";

    $('body').scrollspy({
        target: "#navigationBar"
        //offset: 75
    });
});


//-----------------------------------------------------------------------
//Making the Nav Bar visible only after Home Section
//-----------------------------------------------------------------------
$(document).ready(function () {

    "use Strict";

    var activeMenu = $(this).find("li.active a").attr("href");

    if (activeMenu !== "#ap") {
        $("header nav").addClass("inBody");
    } else {
        $("header nav").removeClass("inBody");
    }

    $("#navigationBar").on("activate.bs.scrollspy", function () {

        "use Strict";

        var activeMenu = $(this).find("li.active a").attr("href");

        if (activeMenu !== "#ap") {
            $("header nav").addClass("inBody");
        } else {
            $("header nav").removeClass("inBody");
        }

    });
});



//-----------------------------------------------------------------------
//Smooth Scrolling of Page
//-----------------------------------------------------------------------
$(document).ready(function () {
    "use strict";

    // Select all links with hashes
    $('.menuItem') // $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});



//-----------------------------------------------------------------------
//Using Google Maps to show my Location
//-----------------------------------------------------------------------
function googleMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.102219, -75.014831),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP //ROADMAP || SATELLITE || HYBRID || TERRAIN
    }

    var map = new google.maps.Map(document.getElementById("myLocation"), mapOptions);

    //Set or Point a Marker
    var marker = new google.maps.Marker({ //To set a Marker (Overlay) on the Google Map
        position: mapOptions.center,
        animation: google.maps.Animation.BOUNCE, //Bounce Animation
        icon: "../images/icons/blackMarker.png" //Custom Icon
    });
    marker.setMap(map);

    //Info Window for User
    var infoWindow = new google.maps.InfoWindow({
        content: "1893 Foster Street, <br /> Philadelphia, PA 19116"
    });
    infoWindow.open(map, marker);
}

googleMap();

// //Change AP Logo on Hover
// $(document).ready(function () {

//     "use strict";

//     $(".apLogo").hover(function () {
//         $('.apLogo').attr("src", "../images/apLogoGradient.png");
//     })

// });