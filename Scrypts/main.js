$(document).ready(function () {



    // Introducerea in IFrame a diferitelor pagini 

    $("#acasa").click(function () {
        $("#iframe").attr("src", "pages/home.html");

    });

    $("#preturi").click(function () {
        $("#iframe").attr("src", "pages/preturi.html");


        $("#iframe").on("load", function () {
            var iframeBody = $(this).contents().find("body");
            if (!iframeBody.hasClass("shadow") && $(window).width() < 768) {
                iframeBody.addClass("shadow");
            }
        });
    });

    $("#shop").click(function (event) {
        event.preventDefault()
        $("#iframe").attr("src", "pages/crafta.html");


        $("#iframe").on("load", function () {
            var iframeBody = $(this).contents().find("body");
            if (!iframeBody.hasClass("shadow") && $(window).width() < 768) {
                iframeBody.addClass("shadow");
            }
        });
    });

    $("#gallery").click(function (event) {
        event.preventDefault()
        $("#iframe").attr("src", "pages/galerie.html");


        $("#iframe").on("load", function () {
            var iframeBody = $(this).contents().find("body");
            if (!iframeBody.hasClass("shadow") && $(window).width() < 768) {
                iframeBody.addClass("shadow");
            }
        });
    });





    // Aparitia formularului de login la apasarea butonului Login
    $('#login').click(function () {
        $('#loginform').css({
            "opacity": "1",
            "pointer-events": "all"
        });

        $(document).click(function (event) {
            if (!$(event.target).closest("#loginform").length && !$(event.target).is("#login")) {
                $("#loginform").css({
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }
        });

        $('#loginform').click(function (event) {
            event.stopPropagation();
        });
    });


    // Afisarea diferitelor meniuri in functie de contul conectat

    $("#submit").click(function (event) {
        event.preventDefault();

        var contVal = $("#cont").val();
        var parolaVal = $("#parola").val();

        if (contVal === "admin" && parolaVal === "admin") {
            $("#login").replaceWith("<div class='user'>Admin</div>");
        } else if (contVal === "test" && parolaVal === "test") {
            $("#login").replaceWith("<div class='user'>Fotograf</div>");
        } else if (contVal === "test2" && parolaVal === "test2") {
            $("#login").replaceWith("<div class='user'>Client</div>");
        } else {
            alert("Contul nu exista");
            return;
        }

        $("#loginform").css({
            "opacity": "0",
            "pointer-events": "none"
        });

        var tablesSelector = "";
        var userSelector = ".user";

        if (contVal === "test") {
            tablesSelector = "#tables2";
        } else if (contVal === "test2") {
            tablesSelector = "#tables3";
        } else {
            tablesSelector = "#tables";
        }

        $(userSelector).mouseover(function (event) {
            event.preventDefault();
            $(tablesSelector).css({
                "opacity": "1",
                "pointer-events": "all"
            });
        });

        $(tablesSelector).mouseleave(function () {
            $(this).css({
                "opacity": "0",
                "pointer-events": "none"
            });
        });

        $(document).on("touchend", function (event) {
            if (!$(event.target).closest(userSelector).length) {
                $(tablesSelector).css({
                    "opacity": "0",
                    "pointer-events": "none"
                });
            }
        });
    });


    // Schimbarea butonului de meniu in momentul schimbarii rezolutiei ecranului

    $(".menu-bar").click(function () {
        $("#bar1").toggleClass("bar1");
        $("#bar2").toggleClass("bar2");
        $("#bar3").toggleClass("bar3");

        $("body").toggleClass("shadow");

        $("iframe").contents().find("body").toggleClass("shadow");

        $('.menu').toggleClass("visible");

        $('.menu li').mouseover(function () {
            $('.preturi').addClass("visible2");
        })
        $('.menu li').mouseleave(function () {
            $('.preturi').removeClass("visible2")
        })

    });


    // Afisarea meniului de Sign-up

    $("#sign-up").click(function (event) {
        event.preventDefault();

        $("iframe").contents().find("body").addClass("shadow");


        $('body').addClass("shadow");
        $('.popup-signup').css({
            "transform": "translate(0)",
            "transition": "1s"
        })
        $(document).click(function (event) {
            if (!$(event.target).closest(".popup-signup").length && !$(event.target).is("#sign-upBtn")) {
                $(".popup-signup").css({
                    "transform": "translate(0, -200%)",
                    "transition": "1s"
                });

                $("body").removeClass("shadow");
                $("iframe").contents().find("body").removeClass("shadow");
            }
        });
    })

    $("#sign-upBtn").click(function () {
        if ($("#sign-upPass").val() === $("#sign-upPass2").val()) {
            alert("Contul a fost creat");
        } else {
            alert("Parolele nu se potrivesc")
        }
    })
});