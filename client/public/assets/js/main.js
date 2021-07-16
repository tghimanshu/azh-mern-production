(function ($) {
  $(document).ready(function () {

    // This is the figure amt inner code

    var a = 0;
    var f = $("#figures");
    if (f.length) {
      $(window).scroll(function () {
        var oTop = $("#figures").offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
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
})(jQuery);
