// ----- SCROLL ----- //
$(window).scroll(function () {
  //Verifica se a Janela está no topo
  if ($(this).scrollTop() > 400) {
    $("#scroll-top-btn").css({ display: "block" });
  } else {
    $("#scroll-top-btn").css({ display: "none" });
  }
});

$("#scroll-top-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
