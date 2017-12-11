$(function() {
  $(".hidden-bio").hide();

  $(".toggle-hidden-bio").click(function() {
    if ($(this).html() == "SHOW LESS") {
      $(".hidden-bio").fadeOut("fast");
      $(this).text("FULL BIO");
      return;
    }

    $(this).text("SHOW LESS");
    $(".hidden-bio").fadeIn("fast");
  });
});


