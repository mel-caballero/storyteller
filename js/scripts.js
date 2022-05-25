function textSize(size) {
  $("main").removeClass("size-smaller size-small size-normal size-big size-bigger");
  $("main").addClass("size-" + size);
}

function inline(space) {
  $("main").removeClass("line-normal line-big line-bigger");
  $("main").addClass("line-" + space);
}

function uppercase() {
  if ($("#uppercase").is(":checked")){
    $("main").removeClass("size-smaller size-small size-normal size-big size-bigger");
    $("main").addClass("uppercase");
  } else {
    $("main").removeClass("uppercase");
  }
}

function fontType(font) {
  $("main").removeClass("font-arial font-lato font-tahoma font-verdana");
  $("main").addClass("font-" + font);
}