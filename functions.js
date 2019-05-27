
/****DROPDOWN LIST*****/
function droplist(box, lista) {
  if ($(lista).css("display") == "none") {
    $(lista).show();
  }
  else {
    $(lista).hide();
  }
  var itemLista = $(lista).children('li');
  $(itemLista).click(function() {
    $(box).html($(this).clone());
    $(lista).hide();
  });
}
/******************/
