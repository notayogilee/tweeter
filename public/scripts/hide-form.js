$(document).ready(function () {

  $('.tweet-logo').click(function (e) {
    $('section').toggleClass('scroll-out');
    $('#tweet-container').toggleClass('scroll-out');
    e.preventDefault();
  })
  $('input').click(function () {
    $('section').toggleClass('scroll-out');
    $('#tweet-container').toggleClass('scroll-out');
  })
  $('.tweet-logo').hover(function () {
    $('.fa-angle-double-down').toggleClass('fa-lg transition');
  })
});