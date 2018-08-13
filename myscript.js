// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

//create a variable to store the status of the box (true or false)
let clicked = false;

//select HTML link that will be clicked
const aboutBtn = document.querySelector("#about");
//select box
const box = document.querySelector("#box");

//add event listener to the link to listen for click
aboutBtn.addEventListener("click", function() {
  //if clicked = false hide the box with CSS display:none and change clicked to true
  if(!clicked) {
    box.style.display = "none";
    clicked = true;
  } else {
      //if clicked = true show the box with CSS display:block and change clicked to false
    box.style.display = "block";
    clicked = false;
  }
  
})
