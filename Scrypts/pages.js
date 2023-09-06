$(document).ready(function () {
    $(".btn-poze").click(function () {
        $(this).parents(".card-inner").toggleClass("flipped");
        $(".card-back-fotografii").show();
        $(".card-back-filmari").hide();
    });

    $(".btn-filme").click(function () {
        $(this).parents(".card-inner").toggleClass("flipped")
        $(".card-back-fotografii").hide();
        $(".card-back-filmari").show();
    });

    $(".btn-reset").click(function () {
        $(this).parents(".card-inner").toggleClass("flipped")
    });



    // Swiper JS code
    var swiper = new Swiper(".slider-content", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: 'true',
        centeredSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },

            1182: {
                slidesPerView: 2,
            },

            1560: {
                slidesPerView: 3,
            },
        },
    });
});



