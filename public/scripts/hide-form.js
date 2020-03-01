$(document).ready(function () {

  $('.tweet-logo').on('click', function (e) {
    $('section').toggleClass('scroll-out');
    $('#tweet-container').toggleClass('scroll-out');
    e.preventDefault();
  });
  $('input').on('click', function () {
    $('section').toggleClass('scroll-out');
    $('#tweet-container').toggleClass('scroll-out');

  })
});