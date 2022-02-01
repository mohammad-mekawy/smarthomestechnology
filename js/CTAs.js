$(document).ready(function () {
        $(".btn-call-bck").click(function () {
          $(".call-overlay").fadeIn();
          $(".quote-popup").delay(500).fadeIn();
        });
        $(".cls_btn").click(function () {
          $(".quote-popup").fadeOut();
          $(".call-overlay").delay(500).fadeOut();
        });
        $(".call-overlay").click(function () {
          $(".quote-popup").fadeOut();
          $(".call-overlay").delay(500).fadeOut();
        });
        $(".btn-call-float,.footer-cta").click(function () {
          $(".call-overlay").fadeIn();
          $(".call-back-popup").delay(500).fadeIn();
        });
        $(".cls_btn").click(function () {
          $(".call-back-popup").fadeOut();
          $(".call-overlay").delay(500).fadeOut();
        });
        $(".call-overlay").click(function () {
          $(".call-back-popup").fadeOut();
          $(".call-overlay").delay(500).fadeOut();
        });
        $(".tabs-menu a").click(function (e) {
          e.preventDefault(),
            $(this).parent().addClass("current"),
            $(this).parent().siblings().removeClass("current");
          var t = $(this).attr("href");
          $(".tab-content").not(t).css("display", "none").fadeOut(1e3),
            $(t).fadeIn(3e3);
        });
        var input1 = document.querySelector("#telephone1");
        window.intlTelInput(input1, {
          preferredCountries: ['ae'],
          separateDialCode: false,
          nationalMode: false,
          utilsScript: "assets/js/utils.js",
        });

        var input2 = document.querySelector("#telephone2");
        window.intlTelInput(input2, {
          preferredCountries: ['ae'],
          separateDialCode: false,
          nationalMode: false,
          utilsScript: "assets/js/utils.js",
        });
    
        var input3 = document.querySelector("#telephone3");
        window.intlTelInput(input3, {
          preferredCountries: ['ae'],
          separateDialCode: false,
          nationalMode: false,
          utilsScript: "assets/js/utils.js",
        });
        var input4 = document.querySelector("#telephone4");
        window.intlTelInput(input4, {
          preferredCountries: ['ae'],
          separateDialCode: false,
          nationalMode: false,
          utilsScript: "assets/js/utils.js",
        });
        var input5 = document.querySelector("#telephone5");
        window.intlTelInput(input5, {
          preferredCountries: ['ae'],
          separateDialCode: false,
          nationalMode: false,
          utilsScript: "assets/js/utils.js",
        });
      });
     