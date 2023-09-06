$(document).ready(function () {


    // JS pentru intoarcerea cartonaselor
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


// JS pentru afisarea intr-un popup a imaginilor la click

$('.pret-usb img').click(function () {
    var imgSrc = $(this).attr('src');

    var popup = $('<div class="popup"></div>');
    var img = $('<img src="' + imgSrc + '">');

    popup.append(img);
    $('body').append(popup);

    popup.click(function () {
        popup.remove();
    });
});

$('.cutii-produs img').click(function () {
    var imgSrc = $(this).attr('src');

    var popup = $('<div class="popup"></div>');
    var img = $('<img src="' + imgSrc + '">');

    popup.append(img);
    $('body').append(popup);

    popup.click(function () {
        popup.remove();
    });
});

