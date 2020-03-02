$(document).ready(function() {

  $('.tweet-logo').click(function(e) {
    $('section').toggleClass('scroll-out');
    $('#tweet-container').toggleClass('scroll-out');
    $('.new-user-tweet').focus();
    e.preventDefault();
  });
  $('input').click(function() {
    $('#tweet-container').addClass('scroll-out');
  });
  $('.tweet-logo').hover(function() {
    $('.fa-angle-double-down').toggleClass('fa-lg transition');
  });
});
