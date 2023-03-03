/* Here the y pos is found and the transition is set to complete when scrolled down 120 px */

$(window).on("scroll", function () {
  var yPos = $(this).scrollTop();
  var yPer = yPos / 120;

  /* The if statement makes sure the percentage doesn't exceed 100% */
  if (yPer > 1) {
    yPer = 1;
  }
});

/* Store heights in variables */
var header = $("header");
var headerHeight = header.height();
