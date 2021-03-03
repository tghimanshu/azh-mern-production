(function ($) {
  $(document).ready(function () {
    // Mobile Navigation
    if ($(".nav-menu").length) {
      var $mobile_nav = $(".nav-menu").clone().prop({
        class: "mobile-nav d-lg-none",
      });
      $("body").append($mobile_nav);
      $("body").prepend(
        '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="ri-menu-3-line"></i></button>'
      );
      $("body").append('<div class="mobile-nav-overly"></div>');

      $(document).on("click", ".mobile-nav-toggle", function (e) {
        $("body").toggleClass("mobile-nav-active");
        $(".mobile-nav-toggle i").toggleClass("ri-menu-3-line ri-close-line");
        $(".mobile-nav-overly").toggle();
      });

      // $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      //   e.preventDefault();
      //   $(this).next().slideToggle(300);
      //   $(this).parent().toggleClass("active");
      // });

      $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Navigation active state on scroll
    // var nav_sections = $("section");
    // var main_nav = $(".nav-menu, #mobile-nav");

    // $(window).on("scroll", function () {
    //   var cur_pos = $(this).scrollTop() + 200;

    //   nav_sections.each(function () {
    //     var top = $(this).offset().top,
    //       bottom = top + $(this).outerHeight();

    //     if (cur_pos >= top && cur_pos <= bottom) {
    //       if (cur_pos <= bottom) {
    //         main_nav.find("li").removeClass("active");
    //       }
    //       main_nav
    //         .find('a[href="#' + $(this).attr("id") + '"]')
    //         .parent("li")
    //         .addClass("active");
    //     }
    //     if (cur_pos < 300) {
    //       $(".nav-menu ul:first li:first").addClass("active");
    //     }
    //   });
    // });

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
      } else {
        $("#header").removeClass("header-scrolled");
      }
    });

    if ($(window).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    }

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });

    $(".back-to-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500,
        "easeInOutExpo"
      );
      return false;
    });

    // This is the figure amt inner code

    var a = 0;
    var f = $("#figures");
    if (f.length) {
      $(window).scroll(function () {
        var oTop = $("#figures").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $(".figure-amt-inner").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-counter");
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },

              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                },
              }
            );
          });
          a = 1;
        }
      });
    }

    $(".sidbar-toggle").on("click", function (e) {
      $("#sidebar").slideToggle();
    });
  }); // ready function
})(jQuery);
