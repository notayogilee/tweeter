$(document).ready(function () {

  $(".new-user-tweet").keyup(function () {

    let maxLength = 140;

    let characterCounter = $(this).closest("form").find(".counter").text(140 - $(this).val().length);
    console.log($(this).val().length);
    if ($(this).val().length > maxLength) {
      $(this).closest("form").find(".counter").addClass("red");
    } else {
      $(this).closest("form").find(".counter").removeClass("red");
    }
  });
});
