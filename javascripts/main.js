require("normalize.css");
require("font-awesome/css/font-awesome.css");
require("../scss/main.scss");

// Disable "smoothscroll-for-websites" because it is outdated and currently throwing errors in Chrome
// Error message: "[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive."
// require("smoothscroll-for-websites");

require("slick-carousel");
require("slick-carousel/slick/slick.css");

var $ = require("jquery");
var skrollr = require("skrollr");

$(document).ready(function() {
  skrollr.init({
    smoothScrolling: false,
    forceHeight: false
  });

  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    fade: true,
    speed: 1000,
    dots: false,
    arrows: false,
    pauseOnHover: false
  });
});
