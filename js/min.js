/*global $, console, WOW */
$(function () {
    "use strict";
  // Navbar function
  // Width Auto Nav
    function widthNavbar() {
        let WidthN = $(".navbar").innerWidth();
        return WidthN;
    }
    let widthNav = widthNavbar();

  // Show Auto Nav
    function showNavbar() {
        const ShowNavbar = $(".content-nav").animate({
            width: 100 + "%"
        }, 600);
        $(".navbar").animate({
            left: 0
        }, 600);
        return ShowNavbar;
    }
  // Closed Auto Nav
    function closedNavbar() {
        const ClosedNavbar = $(".navbar").animate({
            left: -widthNav
        }, 600);
        $(".content-nav").animate({
            width: 0
        }, 600);
        $(".navbar").removeClass("show-list");
        return ClosedNavbar;
    }

  // WOW ANIMATION
    const Wow = new WOW();
    Wow.init();

  // PRELOADER
    $(window).load(function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });
        $(".navbar").css("left", -widthNav);
    });

  // ReSize Window
    $(window).resize(function () {
        let reSize = $(".navbar").innerWidth();
        $(".navbar").css("left", -reSize);
        if ($(".navbar").hasClass("show-list")) {
            closedNavbar();
        }
    });

  // Dark Theem
    $(".box-dark").click(function (e) {
        e.preventDefault();
        $("body").toggleClass("dark-theem");
        $(".dark").toggleClass("dark-toggle");
    });

  // When Scroll body Sticky Nav bar
    $(window).scroll(function () {
        const scroll = $(this).scrollTop(),
            heightHead = $("header").innerHeight();
    //add class in nav
        if (scroll > 1) {
            if ($("nav").hasClass() !== "top-nav") {
                $("nav").addClass("top-nav animated fadeInDown");
            }
            if ($(".navbar").hasClass("show-list")) {
                closedNavbar();
            }
        } else {
            $("nav").removeClass("top-nav animated fadeInDown");
        }
        if (scroll > heightHead) {
            $(".top").fadeIn();
        } else {
            $(".top").fadeOut();
        }
    // add active to scroll
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top - 100) {
                var blockID = $(this).attr("id");
                $(".nav-link").removeClass("active");
                $('.nav-link[data-scroll="' + blockID + '"]').addClass("active");
            }
        });
    });

  // Nav Toggle List
    $(".nav-bar").click(function () {
        $(".navbar").toggleClass("show-list");
        if ($(".navbar").hasClass("show-list")) {
            showNavbar();
        } else {
            closedNavbar();
        }
    });

  // Closed Navbar
    $(".icon, .nav-link ,.content-nav").click(function () {
        closedNavbar();
    });
  // Add Class Active To Nav Linl
    $(".nav-link").click(function (e) {
        const navHieght = $("nav").innerHeight();
        e.preventDefault();
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - navHieght
        }, 1500);
        closedNavbar();
    });
  // Set Data To Popup
    $(".work-link").click(function (e) {
        e.preventDefault();
        const src = $(this).parent().children("img").attr("src");
        const name = $(this).parent().children("h4").text();
        const link = $(this).parent().attr("dataLink");
        const skiil = $(this).parent().attr("dataSkiils");
        $(".img-popup").attr("src", src);
        $(".name-pop").text(name);
        $(".link-popup").attr("href", link);
        $(".skiils-pop").text(skiil);
    });
  // Work Section Btn Shwo Popup
    $(".work-link").click(function (e) {
        e.preventDefault();
        $(".popup-work").fadeIn();
    });
      // Hide PopUp Fuinctios
    $(".popup-work").click(function () {
        $(this).fadeOut();
    });
    $(".content-popup-work").click(function (e) {
        e.stopPropagation();
    });
    $(".popup-work .icon").click(function (e) {
        e.preventDefault();
        $(".popup-work").fadeOut();
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.popup-work .content-popup-work"').fadeOut();
        }
    });
      // Goto Top
    $(".top").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
});
