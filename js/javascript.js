    /*
    amountOfImages = 5; //MUDE ESSE NÚMERO PRO NÚMERO DE IMAGENS NA GALERIA ------------------------------------------------------------------------------------------->
    while (i <= amountOfImages) {
        $(".art-gallery-column-1").append("<button onClick='artGalleryRedirect(" + i + ")'><img src='img/art-gallery/" + i.toString() + ".png' alt='' class='art-gallery-img'></button>");
        i++;
        $(".art-gallery-column-2").append("<button onClick='artGalleryRedirect(" + i + ")'><img src='img/art-gallery/" + i.toString() + ".png' alt='' class='art-gallery-img'></button>");
        i++;
        $(".art-gallery-column-3").append("<button onClick='artGalleryRedirect(" + i + ")'><img src='img/art-gallery/" + i.toString() + ".png' alt='' class='art-gallery-img'></button>");
        i++;
        $(".art-gallery-column-4").append("<button onClick='artGalleryRedirect(" + i + ")'><img src='img/art-gallery/" + i.toString() + ".png' alt='' class='art-gallery-img'></button>");
        i++;
      }
     */


function galleryDisplay(open, galleryIMG) {
  if(open == true)
  {
    $(".galleryOverlay").addClass("invisible")
    $(".galleryOverlay").removeClass("visible")

    $(".galleryClose").addClass("invisible")
    $(".galleryClose").removeClass("visible")

    $( "#galleryImage" ).remove();
    open = false;
  }
  else{
    $(".galleryOverlay").removeClass("invisible")
    $(".galleryOverlay").addClass("visible")

    $(".galleryClose").removeClass("invisible")
    $(".galleryClose").addClass("visible")

     switch(galleryIMG) {
    case 1:
      $(".galleryIMG").append('<img src="img/illustrations/astofritz2.png" alt="" id="galleryImage"></img>')
    break;
    case 2:
      $(".galleryIMG").append('<img src="img/illustrations/battle.png" alt="" id="galleryImage"></img>')
    break;

    case 3:
      $(".galleryIMG").append('<img src="img/illustrations/booty1.png" alt="" id="galleryImage"></img>')
    break;

    case 4:
      $(".galleryIMG").append('<img src="img/illustrations/Finished.png" alt="" id="galleryImage"></img>')
    break;

    case 5:
      $(".galleryIMG").append('<img src="img/illustrations/Gotta_go_fast.png" alt="" id="galleryImage"></img>')
    break;

    case 6:
      $(".galleryIMG").append('<img src="img/illustrations/pocky_and_ice_creame.png" alt="" id="galleryImage"></img>')
    break;

    case 7:
      $(".galleryIMG").append('<img src="img/illustrations/slimeball.png" alt="" id="galleryImage"></img>')
    break;
    default:
    $(".galleryIMG").append('<img src="img/illustrations/slimeball.png" alt="" id="galleryImage"></img>')
    } 

    open = true;
  }



}


//parallax effect
$(document).mousemove(function(e) {
  $("#follow").css({
    left: e.pageX * 0.015,
    top: e.pageY * 0.015
  });
});


dragElement(document.getElementById("drag-div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}