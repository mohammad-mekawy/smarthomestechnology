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
        $(".btn-call-float").click(function () {
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
      });
     