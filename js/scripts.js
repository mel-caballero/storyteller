function textSize(size) {
  /*var elements = document.getElementsByClassName("book-content")

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.fontSize = size;
  }*/
  $('main').css('font-size', size + 'px');
}

function inline(space) {
  /*var elements = document.getElementsByClassName('book-content')

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.style.lineHeight = space;
  }*/
  $('.sj-book').css('line-height', space);
}

function uppercase() {
  if ($('#uppercase').is(':checked')){
    $('main').css('text-transform', 'uppercase');
  } else {
    $('main').css('text-transform', '');
  }
}