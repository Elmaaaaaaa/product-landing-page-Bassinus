var navList = document.getElementById("navList");
navList.style.maxHeight = "0px";
function togglemenu() {
  if (navList.style.maxHeight == "0px") {
    navList.style.maxHeight = "130px";
  } else
  {
    navList.style.maxHeight = "0px";
  }
}
src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
crossorigin = "anonymous";
src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
crossorigin = "anonymous";
src = "js/smooth_scrolling.js";